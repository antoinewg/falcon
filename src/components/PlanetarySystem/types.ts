export interface Route {
  origin: string
  destination: string
  travel_time: number
}

export interface Node {
  id: string
  color: string
}

export interface Link {
  source: string
  target: string
  distance: number
}

export interface Network {
  nodes: Node[]
  links: Link[]
}
