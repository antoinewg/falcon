interface Node {
  id: string
  color: string
}

export const NodeComponent = ({ node }: { node: Node }) => (
  <g>
    <circle fill={node.color} stroke={node.color} r={30} />
    <text y={4} textAnchor="middle">
      {node.id}
    </text>
  </g>
)
