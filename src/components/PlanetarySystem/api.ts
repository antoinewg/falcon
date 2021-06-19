import { useQuery } from 'react-query'

import { QueryKeys, PLANET_URL } from '../../constants'

import { Route } from './types'

const query = () => fetch(`${PLANET_URL}/1`).then((res) => res.json())

export const useRoutes = () => useQuery<{ routes: Array<Route> }>(QueryKeys.PLANETS, query)

export const usePlanets = () => {
  const { data } = useRoutes()
  const planets = new Set<string>()

  data?.routes.forEach(({ origin, destination }) => {
    planets.add(origin)
    planets.add(destination)
  })

  return Array.from(planets)
}
