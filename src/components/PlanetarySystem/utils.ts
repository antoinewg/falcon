import { Route, Link, Network } from './types'

const DEFAULT_COLOR = 'lightskyblue'

export const getNetworkData = (routes: Route[]): Network => {
  const planets = new Set<string>()
  const links: Link[] = []

  routes.forEach(({ origin: source, destination: target, travel_time: distance }) => {
    planets.add(source)
    planets.add(target)
    links.push({ source, target, distance })
  })

  return {
    nodes: Array.from(planets).map((id) => ({ id, color: DEFAULT_COLOR })),
    links,
  }
}
