import GraphNetwork from 'react-graph-network'

import { useConfiguration } from '../../configuration/Wrapper'

import { useFalcon, useRoutes } from './api'
import { NodeComponent } from './Node'
import { getNetworkData } from './utils'

export const PlanetarySystem = () => {
  const { data } = useRoutes()
  const { data: falcon } = useFalcon()
  const { configuration } = useConfiguration()

  const { rebels } = configuration

  const rebelsPlanets = Array.from(new Set(rebels?.bounty_hunters.map(({ planet }) => planet)))

  if (!data) return null

  const networkData = getNetworkData(
    data?.routes,
    rebelsPlanets,
    falcon?.departure,
    falcon?.arrival,
  )

  return (
    <GraphNetwork
      data={networkData}
      id="graph"
      NodeComponent={NodeComponent}
      nodeDistance={3000}
      hoverOpacity={0.3}
      enableDrag={true}
    />
  )
}
