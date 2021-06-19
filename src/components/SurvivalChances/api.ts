import { useQuery } from 'react-query'

import { QueryKeys, ODDS_URL } from '../../constants'

import { Odds } from './types'

const query = () => fetch(`${ODDS_URL}/1`).then((res) => res.json())

export const useSurvivalOdds = () => useQuery<Odds>(QueryKeys.ODDS, query)
export const useComputedOdds = () => useQuery<Odds>(QueryKeys.ODDS, query)
