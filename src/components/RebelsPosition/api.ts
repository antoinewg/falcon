import { useQuery } from 'react-query'

import { QueryKeys, REBELS_URL } from '../../constants'

import { IRebelsPosition } from './types'

const query = () => fetch(`${REBELS_URL}/1`).then((res) => res.json())

export const useRebelsPosition = () => useQuery<IRebelsPosition>(QueryKeys.REBELS_POSITION, query)
