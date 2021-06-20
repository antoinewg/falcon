import snapshotDiff from 'snapshot-diff'

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

const baseNetwork = {
  nodes: [
    { id: 'Tatooine', color: 'lightskyblue', finish: false, start: false, hunter: false },
    { id: 'Dagobah', color: 'lightskyblue', finish: false, start: false, hunter: false },
    { id: 'Endor', color: 'lightskyblue', finish: false, start: false, hunter: false },
    { id: 'Hoth', color: 'lightskyblue', finish: false, start: false, hunter: false },
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
  it('should retrieve the network data from routes, with no hunters and no start/finish', () => {
    const network = getNetworkData(routes, [], undefined, undefined)
    expect(network.links).toStrictEqual(baseNetwork.links)
    expect(network.nodes).toStrictEqual(baseNetwork.nodes)
  })

  it('should retrieve the network data from routes, with no hunters but with start/finish', () => {
    const network = getNetworkData(routes, [], 'Tatooine', 'Dagobah')
    expect(network.links).toStrictEqual(baseNetwork.links)
    expect(snapshotDiff(network.nodes, baseNetwork.nodes)).toMatchSnapshot()
  })

  it('should retrieve the network data from routes, with no hunters but with invalid start/finish', () => {
    const network = getNetworkData(routes, [], 'Totooine', 'Dagobert')
    expect(network.links).toStrictEqual(baseNetwork.links)
    expect(network.nodes).toStrictEqual(baseNetwork.nodes)
  })

  it('should retrieve the network data from routes, with no start/finish but with hunters', () => {
    const network = getNetworkData(routes, ['Hoth'], undefined, undefined)
    expect(network.links).toStrictEqual(baseNetwork.links)
    expect(snapshotDiff(network.nodes, baseNetwork.nodes)).toMatchSnapshot()
  })

  it('should retrieve the network data from routes, with start/finish and hunters', () => {
    const network = getNetworkData(routes, ['Hoth'], 'Tatooine', 'Dagobah')
    expect(network.links).toStrictEqual(baseNetwork.links)
    expect(network.nodes).toStrictEqual([
      { id: 'Tatooine', color: 'lightsalmon', finish: false, start: true, hunter: false },
      { id: 'Dagobah', color: 'lightgreen', finish: true, start: false, hunter: false },
      { id: 'Endor', color: 'lightskyblue', finish: false, start: false, hunter: false },
      { id: 'Hoth', color: 'lightskyblue', finish: false, start: false, hunter: true },
    ])
  })
})
