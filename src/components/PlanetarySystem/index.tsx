import GraphNetwork from 'react-graph-network'

import { usePlanets } from './api'
import { NodeComponent } from './Node'
import { getNetworkData } from './utils'

export const PlanetarySystem = () => {
  const { data } = usePlanets()

  return data ? (
    <GraphNetwork
      data={getNetworkData(data.routes)}
      id="graph"
      NodeComponent={NodeComponent}
      nodeDistance={3000}
      hoverOpacity={0.3}
      enableDrag={true}
    />
  ) : null
}
