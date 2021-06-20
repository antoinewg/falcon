const getHashState = (state) => `${state.currentPlanet}:${state.fuel}:${state.risk}:${state.day}`

const getPlanets = (routes) => {
  const planets = {}

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

const isRisky = (hunters, planet, day) =>
  hunters.some((hunter) => hunter.day === day && hunter.planet === planet)

const getCapturingOddsFromRiskyDays = (riskyDays) => {
  if (riskyDays === Infinity) return 1
  const array = Array.from({ length: riskyDays }).map((_, k) => 9 ** k / 10 ** (k + 1))
  return array.reduce((p, a) => p + a, 0)
}

const computeOdds = (falcon, empire, routes) => {
  let minimumRisk = Infinity
  const planets = getPlanets(routes)

  const initialState = {
    currentPlanet: falcon.departure,
    fuel: falcon.autonomy,
    risk: 0,
    day: 0,
  }

  const visitedStates = new Set()
  const possibleStates = [initialState]

  while (possibleStates.length) {
    const state = possibleStates.shift()
    if (typeof state === 'undefined') continue

    const hashState = getHashState(state)
    if (visitedStates.has(hashState)) continue
    visitedStates.add(hashState)

    if (state.currentPlanet === falcon.arrival) {
      minimumRisk = Math.min(minimumRisk, state.risk)
    }

    Object.entries(planets[state.currentPlanet]).forEach(([neighboor, distance]) => {
      if (distance > state.fuel) return
      if (state.day + distance > empire.countdown) return

      possibleStates.push({
        currentPlanet: neighboor,
        fuel: state.fuel - distance,
        risk: state.risk + +isRisky(empire.bounty_hunters, neighboor, state.day + distance),
        day: state.day + distance,
      })
    })

    if (state.day + 1 < empire.countdown)
      possibleStates.push({
        currentPlanet: state.currentPlanet,
        fuel: falcon.autonomy,
        risk: state.risk + +isRisky(empire.bounty_hunters, state.currentPlanet, state.day + 1),
        day: state.day + 1,
      })
  }

  return 1 - getCapturingOddsFromRiskyDays(minimumRisk)
}

module.exports = computeOdds
