import { Node } from './types'

const getEmoji = (node: Node): string => {
  let res = ''
  if (node.start) res += ' 🛫 '
  if (node.finish) res += ' 🛬 '
  if (node.hunter) res += ' 🎱 '
  return res
}

export const NodeComponent = ({ node }: { node: Node }) => {
  const emoji = getEmoji(node)

  return (
    <g>
      <circle fill={node.color} stroke={node.color} r={30} />
      <text y={4} textAnchor="middle">
        {node.id}
      </text>

      {emoji.length > 0 ? (
        <text y={20} textAnchor="middle">
          {emoji}
        </text>
      ) : null}
    </g>
  )
}
