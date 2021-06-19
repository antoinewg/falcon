import GraphNetwork from 'react-graph-network'

import { NodeComponent } from './Node'

const data = {
  nodes: [
    { id: 'Tatooine', color: 'lightgreen' },
    { id: 'Dagobah', color: 'lightsalmon' },
    { id: 'Hoth', color: 'lightsalmon' },
    { id: 'Endor', color: 'lightskyblue' },
  ],
  links: [
    { source: 'Tatooine', target: 'Dagobah', distance: 6 },
    { source: 'Dagobah', target: 'Endor', distance: 4 },
    { source: 'Dagobah', target: 'Hoth', distance: 1 },
    { source: 'Hoth', target: 'Endor', distance: 1 },
    { source: 'Tatooine', target: 'Hoth', distance: 1 },
  ],
}

export const Graph = () => (
  <GraphNetwork
    data={data}
    id="graph"
    NodeComponent={NodeComponent}
    nodeDistance={3000}
    hoverOpacity={0.3}
    enableDrag={true}
  />
)
