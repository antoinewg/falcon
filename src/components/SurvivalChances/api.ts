import { useQuery } from 'react-query'

import { computeOdds } from '../../algo/computeOdds'
import { useConfiguration } from '../../configuration/Wrapper'
import { QueryKeys, ODDS_URL } from '../../constants'
import { useFalcon, useRoutes } from '../PlanetarySystem/api'

import { Odds } from './types'

export const useSurvivalOdds = () => {
  const { configuration } = useConfiguration()

  return useQuery<Odds>([QueryKeys.ODDS, configuration.example], (context) =>
    fetch(`${ODDS_URL}/${context.queryKey[1]}`).then((res) => res.json()),
  )
}

export const useComputedOdds = () => {
  const { configuration } = useConfiguration()
  const { data: falcon } = useFalcon()
  const { data: routes } = useRoutes()

  return falcon && configuration.hunters && routes
    ? computeOdds(falcon, configuration.hunters, routes.routes)
    : undefined
}
