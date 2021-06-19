import { useQuery } from 'react-query'

import { QueryKeys, PLANET_URL } from '../../constants'

import { Route } from './utils'

const query = () => fetch(`${PLANET_URL}/1`).then((res) => res.json())

export const usePlanets = () => useQuery<{ routes: Array<Route> }>(QueryKeys.PLANETS, query)
