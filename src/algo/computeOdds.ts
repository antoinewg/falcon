import { IHuntersPosition } from '../components/HuntersPosition/types'
import { Falcon, Route } from '../components/PlanetarySystem/types'

interface State {
  currentPlanet: string
  fuel: number
  risk: number
  day: number
}

type Planets = Record<string, Record<string, number>>

const getHashState = (state: State): string =>
  `${state.currentPlanet}:${state.fuel}:${state.risk}:${state.day}`

const getPlanets = (routes: Route[]): Planets => {
  const planets: Planets = {}

  routes.forEach(({ origin, destination, travel_time }) => {
    if (!(origin in planets)) planets[origin] = {}
    if (!(destination in planets)) planets[destination] = {}

    planets[origin][destination] =
      destination in planets[origin]
        ? Math.min(planets[origin][destination], travel_time)
        : travel_time
    planets[destination][origin] =
      origin in planets[destination]
        ? Math.min(planets[destination][origin], travel_time)
        : travel_time
  })

  return planets
}

const isRisky = (
  hunters: IHuntersPosition['bounty_hunters'],
  planet: string,
  day: number,
): boolean => hunters.some((hunter) => hunter.day === day && hunter.planet === planet)

const getCapturingOddsFromRiskyDays = (riskyDays: number): number => {
  if (riskyDays === Infinity) return 1
  const array = Array.from({ length: riskyDays }).map((_, k) => 9 ** k / 10 ** (k + 1))
  return array.reduce((p, a) => p + a, 0)
}

export const computeOdds = (falcon: Falcon, empire: IHuntersPosition, routes: Route[]): number => {
  // Our goal is to minimize the odds of getting caught by the bounty hunters, not to save on fuel
  let minimumRisk = Infinity

  // First we simplify the routes into a symetric object
  const planets = getPlanets(routes)

  const initialState: State = {
    currentPlanet: falcon.departure,
    fuel: falcon.autonomy,
    risk: 0,
    day: 0,
  }

  const visitedStates = new Set<string>()
  const possibleStates = [initialState]

  while (possibleStates.length) {
    const state = possibleStates.shift()
    if (typeof state === 'undefined') continue

    // We keep a list of the states we have already visited to boost performances
    const hashState = getHashState(state)
    if (visitedStates.has(hashState)) continue // exit if we have already considered this state
    visitedStates.add(hashState)

    // We have arrived to the destination with one possible itinerary
    if (state.currentPlanet === falcon.arrival) {
      minimumRisk = Math.min(minimumRisk, state.risk)
    }

    // From a planet, we can:
    // 1. travel to neighbouring planets and use fuel.
    // 2. refuel on this planet, to be able to reach further neighbouring planets.
    // 3. stay on this planet strategically, but use time

    // 1. List the planets we can travel to with our current fuel level
    Object.entries(planets[state.currentPlanet]).forEach(([neighboor, distance]) => {
      // Too Far
      if (distance > state.fuel) return
      // No time left
      if (state.day + distance > empire.countdown) return

      possibleStates.push({
        currentPlanet: neighboor,
        fuel: state.fuel - distance,
        risk: state.risk + +isRisky(empire.bounty_hunters, neighboor, state.day + distance),
        day: state.day + distance,
      })
    })

    // 2. If we don't have fuel left, we may need to refuel:
    if (state.day + 1 < empire.countdown)
      possibleStates.push({
        currentPlanet: state.currentPlanet,
        fuel: falcon.autonomy,
        risk: state.risk + +isRisky(empire.bounty_hunters, state.currentPlanet, state.day + 1),
        day: state.day + 1,
      })

    // 3. The third case is equivalent to the second.
    // Since we stay on the planet, we may as well refuel the tank.
  }

  return 1 - getCapturingOddsFromRiskyDays(minimumRisk)
}
