import answer1 from '../../examples/example1/answer.json'
import empire1 from '../../examples/example1/empire.json'
import falcon1 from '../../examples/example1/millenium-falcon.json'
import answer2 from '../../examples/example2/answer.json'
import empire2 from '../../examples/example2/empire.json'
import falcon2 from '../../examples/example2/millenium-falcon.json'
import answer3 from '../../examples/example3/answer.json'
import empire3 from '../../examples/example3/empire.json'
import falcon3 from '../../examples/example3/millenium-falcon.json'
import answer4 from '../../examples/example4/answer.json'
import empire4 from '../../examples/example4/empire.json'
import falcon4 from '../../examples/example4/millenium-falcon.json'
import { computeOdds } from '../computeOdds'

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

describe('computeOdds()', () => {
  it('example 1', () => {
    const computedOdds = computeOdds(falcon1, empire1, routes)
    expect(computedOdds).toEqual(answer1.odds)
  })

  it('example 2', () => {
    const computedOdds = computeOdds(falcon2, empire2, routes)
    expect(computedOdds).toEqual(answer2.odds)
  })

  it('example 3', () => {
    const computedOdds = computeOdds(falcon3, empire3, routes)
    expect(computedOdds).toEqual(answer3.odds)
  })

  it('example 4', () => {
    const computedOdds = computeOdds(falcon4, empire4, routes)
    expect(computedOdds).toEqual(answer4.odds)
  })

  fit('simple example with no bounty hunter', () => {
    const computedOdds = computeOdds(
      { autonomy: 6, departure: 'Tatooine', arrival: 'Endor', routes_db: 'universe.db' },
      { countdown: 10, bounty_hunters: [] },
      routes,
    )
    expect(computedOdds).toEqual(0)
  })
})
