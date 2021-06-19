import { getNetworkData } from '../utils'

const routes = [
  {
    origin: 'Tatooine',
    destination: 'Dagobah',
    travel_time: 6,
  },
  {
    origin: 'Dagobah',
    destination: 'Endor',
    travel_time: 4,
  },
  {
    origin: 'Dagobah',
    destination: 'Hoth',
    travel_time: 1,
  },
  {
    origin: 'Hoth',
    destination: 'Endor',
    travel_time: 1,
  },
  {
    origin: 'Tatooine',
    destination: 'Hoth',
    travel_time: 6,
  },
]

const networkData = {
  nodes: [
    { id: 'Tatooine', color: 'lightskyblue' },
    { id: 'Dagobah', color: 'lightskyblue' },
    { id: 'Endor', color: 'lightskyblue' },
    { id: 'Hoth', color: 'lightskyblue' },
  ],
  links: [
    { source: 'Tatooine', target: 'Dagobah', distance: 6 },
    { source: 'Dagobah', target: 'Endor', distance: 4 },
    { source: 'Dagobah', target: 'Hoth', distance: 1 },
    { source: 'Hoth', target: 'Endor', distance: 1 },
    { source: 'Tatooine', target: 'Hoth', distance: 6 },
  ],
}

describe('getNetworkData()', () => {
  it('should retrieve the network data from routes', () => {
    expect(getNetworkData(routes)).toStrictEqual(networkData)
  })
})
