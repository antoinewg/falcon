import { Route, Link, Network, Colors } from './types'

export const getNetworkData = (
  routes: Route[],
  hunters?: string[],
  start?: string,
  finish?: string,
): Network => {
  const planets = new Set<string>()
  const links: Link[] = []

  routes.forEach(({ origin: source, destination: target, travel_time: distance }) => {
    planets.add(source)
    planets.add(target)
    links.push({ source, target, distance })
  })

  return {
    nodes: Array.from(planets).map((id) => ({
      id,
      color: mapColor(id, start, finish),
      start: id === start,
      finish: id === finish,
      hunter: (hunters || []).includes(id),
    })),
    links,
  }
}

const mapColor = (id: string, start?: string, finish?: string): Colors => {
  if (id === start) return Colors.START
  if (id === finish) return Colors.FINISH
  return Colors.DEFAULT
}
