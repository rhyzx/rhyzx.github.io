import {
  Circle,
  Document,
  Image,
  Link,
  Page,
  Svg,
  Text,
  View,
} from "@react-pdf/primitives"

import { fromMarkdown } from "mdast-util-from-markdown"
import { directive } from "micromark-extension-directive"
import { directiveFromMarkdown } from "mdast-util-directive"
import source from "./README.md" with { type: "text" }

const ast = fromMarkdown(source, {
  extensions: [directive()],
  mdastExtensions: [directiveFromMarkdown()],
})

export default function () {
  /** @param {import("mdast").RootContent} node */
  function Node(node) {
    if (node.type === "heading") {
      const style =
        node.depth === 1 ?
          {
            marginTop: "60px",
            // marginBottom: "24px",
            fontSize: "30px",
            fontWeight: 600,
            lineHeight: 1.6,
          }
        : node.depth === 2 ?
          {
            marginTop: "48px",
            // marginBottom: "24px",
            fontSize: "22px",
            fontWeight: 600,
            lineHeight: 1.15,
          }
        : node.depth === 3 ?
          {
            marginTop: "32px",
            // marginBottom: "16px",
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: 1.15,
          }
        : {
            // marginTop: "30px",
            fontWeight: 600,
          }
      return (
        <Text style={style}>
          {node.children.map((node) => (
            <Node {...node} />
          ))}
        </Text>
      )
    }
    if (node.type === "paragraph") {
      return (
        <Text>
          {node.children.map((node) => (
            <Node {...node} />
          ))}
        </Text>
      )
    }
    if (node.type === "list") {
      return (
        <View style={{ marginLeft: "32px" }}>
          {node.children.map(({ children }) => (
            <View style={{ flexDirection: "row", gap: "8px" }}>
              <Svg width="4px" height="24px" viewBox="0 0 2 2">
                <Circle cx={1} cy={1} r={1} fill="currentColor" />
              </Svg>
              <View>
                {children.map((node) => (
                  <Node {...node} />
                ))}
              </View>
            </View>
          ))}
        </View>
      )
    }

    // if (node.type === "image") {
    //   return <Image src={node.url} width={node.width} height={node.height} />
    // }

    if (node.type === "text") {
      return node.value
    }
    if (node.type === "link") {
      return (
        <Link
          href={node.url}
          style={{ color: "#065588", textDecoration: "none" }}
        >
          {node.children.map((node) => (
            <Node {...node} />
          ))}
        </Link>
      )
    }
    // null not allowed
    return []
  }

  return (
    <Document>
      <Page
        size="A4"
        dpi={96}
        // 794x1123px
        style={{
          fontFamily: ["latin", "default"],
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: 300,
          gap: "18px",
          color: "#1f0909",
          backgroundColor: "#f3f2ee",
          padding: "60px",
        }}
      >
        {ast.children.map((node) => (
          <Node {...node} />
        ))}

        {/* page wrap bug on bottom absolute https://github.com/diegomura/react-pdf/issues/733 */}
        <Link
          href="https://github.com/rhyzx/rhyzx.github.io/tree/resume"
          style={{
            position: "absolute",
            fontSize: "8px",
            top: "8px",
            right: "8px",
            color: "#ccc",
            textDecoration: "none",
          }}
        >
          Crafted with React-pdf & mdast
        </Link>
      </Page>
    </Document>
  )
}
