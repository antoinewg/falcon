import { useQuery } from 'react-query'

import { useConfiguration } from '../../configuration/Wrapper'
import { QueryKeys, ODDS_URL } from '../../constants'

import { Odds } from './types'

export const useSurvivalOdds = () => {
  const { configuration } = useConfiguration()

  return useQuery<Odds>([QueryKeys.ODDS, configuration.example], (context) =>
    fetch(`${ODDS_URL}/${context.queryKey[1]}`).then((res) => res.json()),
  )
}

export const useComputedOdds = () => {
  const { configuration } = useConfiguration()

  return useQuery<Odds>([QueryKeys.ODDS, configuration.example], (context) =>
    fetch(`${ODDS_URL}/${context.queryKey[1]}`).then((res) => res.json()),
  )
}
