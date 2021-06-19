import GraphNetwork from 'react-graph-network'

import { useFalcon, useRoutes } from './api'
import { NodeComponent } from './Node'
import { getNetworkData } from './utils'

export const PlanetarySystem = () => {
  const { data } = useRoutes()
  const { data: falcon } = useFalcon()

  if (!data) return null

  return (
    <GraphNetwork
      data={getNetworkData(data?.routes, falcon?.departure, falcon?.arrival)}
      id="graph"
      NodeComponent={NodeComponent}
      nodeDistance={3000}
      hoverOpacity={0.3}
      enableDrag={true}
    />
  )
}
