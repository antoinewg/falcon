import { useQuery } from 'react-query'

import { useConfiguration } from '../../configuration/Wrapper'
import { QueryKeys, REBELS_URL } from '../../constants'

import { IRebelsPosition } from './types'

export const useRebelsPosition = () => {
  const { configuration } = useConfiguration()

  return useQuery<IRebelsPosition>([QueryKeys.REBELS_POSITION, configuration.example], (context) =>
    fetch(`${REBELS_URL}/${context.queryKey[1]}`).then((res) => res.json()),
  )
}
