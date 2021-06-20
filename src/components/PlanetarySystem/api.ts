import { useQuery } from 'react-query'

import { useConfiguration } from '../../configuration/Wrapper'
import { QueryKeys, FALCON_URL, PLANET_URL } from '../../constants'

import { Falcon, Route } from './types'

export const useRoutes = () => {
  const { configuration } = useConfiguration()

  return useQuery<{ routes: Array<Route> }>([QueryKeys.PLANETS, configuration.example], (context) =>
    fetch(`${PLANET_URL}/${context.queryKey[1]}`).then((res) => res.json()),
  )
}

export const usePlanets = () => {
  const { data } = useRoutes()
  const planets = new Set<string>()

  data?.routes.forEach(({ origin, destination }) => {
    planets.add(origin)
    planets.add(destination)
  })

  return Array.from(planets)
}

export const useFalcon = () => {
  const { configuration } = useConfiguration()

  return useQuery<Falcon>([QueryKeys.FALCON, configuration.example], (context) =>
    fetch(`${FALCON_URL}/${context.queryKey[1]}`).then((res) => res.json()),
  )
}
