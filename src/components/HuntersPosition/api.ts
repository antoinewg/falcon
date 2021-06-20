import { useQuery } from 'react-query'

import { useConfiguration } from '../../configuration/Wrapper'
import { QueryKeys, HUNTERS_URL } from '../../constants'

import { IHuntersPosition } from './types'

export const useHuntersPosition = () => {
  const { configuration } = useConfiguration()

  return useQuery<IHuntersPosition>(
    [QueryKeys.HUNTERS_POSITION, configuration.example],
    (context) => fetch(`${HUNTERS_URL}/${context.queryKey[1]}`).then((res) => res.json()),
  )
}
