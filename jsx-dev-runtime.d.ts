// https://www.typescriptlang.org/docs/handbook/jsx.html#basic-usage
import {
  DocumentProps,
  PageProps,
  Style,
  TextProps,
  ViewProps,
} from "@react-pdf/types"

export namespace JSX {
  type PropsOf<T> = T & {
    style?: Style
    children?: Element
  }

  type IntrinsicElements = {
    DOCUMENT: PropsOf<DocumentProps>
    PAGE: PropsOf<PageProps>
    VIEW: PropsOf<ViewProps>
    TEXT: PropsOf<TextProps>
    LINK: PropsOf<{ href: string }>
  }

  interface ElementChildrenAttribute {
    children: {} // no children type checking?
  }

  type Element = string | number | boolean | null | undefined | Element[]

  // no class component
  type ElementType = keyof IntrinsicElements | ((props: any) => Element)
}
