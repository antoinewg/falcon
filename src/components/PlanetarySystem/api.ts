import { useQuery } from 'react-query'

import { QueryKeys, FALCON_URL, PLANET_URL } from '../../constants'

import { Falcon, Route } from './types'

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

const falconQuery = () => fetch(`${FALCON_URL}/1`).then((res) => res.json())

export const useFalcon = () => useQuery<Falcon>(QueryKeys.FALCON, falconQuery)
