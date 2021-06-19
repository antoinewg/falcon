export enum Colors {
  DEFAULT = 'lightskyblue',
  START = 'lightsalmon',
  FINISH = 'lightgreen',
}

export interface Route {
  origin: string
  destination: string
  travel_time: number
}

export interface Node {
  id: string
  color: Colors
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

export interface Falcon {
  autonomy: number
  departure: string
  arrival: string
  routes_db: string
}
