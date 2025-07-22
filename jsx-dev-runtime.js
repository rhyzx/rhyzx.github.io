export const Fragment = ({ children }) => children

export function jsxDEV(type, props, _key, _isStatic, _source, self) {
  if (typeof type === "function") return type.call(self, props)
  // https://github.com/diegomura/react-pdf/blob/ee5c96b80326ba4441b71be4c7a85ba9f61d4174/packages/renderer/src/renderer.js#L3
  const { style, children = [], ...rest } = props
  return {
    type,
    box: {},
    style,
    props: rest,
    children: Array.isArray(children) ? flatten(children) : [flatten(children)],
  }
}

function flatten(node) {
  if (Array.isArray(node)) return node.flatMap(flatten)
  if (typeof node !== "object" || node === null) {
    // TODO parent check?
    // https://github.com/diegomura/react-pdf/blob/ee5c96b80326ba4441b71be4c7a85ba9f61d4174/packages/renderer/src/renderer.js#L25
    return { type: "TEXT_INSTANCE", value: `${node}` }
  }
  return node
}
