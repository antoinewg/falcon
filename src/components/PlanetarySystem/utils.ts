export interface Route {
  origin: string
  destination: string
  travel_time: number
}

interface Node {
  id: string
  color: string
}

interface Link {
  source: string
  target: string
  distance: number
}

interface Network {
  nodes: Node[]
  links: Link[]
}

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
