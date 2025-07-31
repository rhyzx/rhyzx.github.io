import PDFDocument from "@react-pdf/pdfkit"
import layoutDocument from "@react-pdf/layout"
import FontStore from "@react-pdf/font"
import renderPDF from "@react-pdf/render"
import { Readable, Writable } from "node:stream"
import * as fs from "node:fs"

const fontStore = new FontStore()
// https://github.com/diegomura/react-pdf/issues/1662
// work-break: break-all
fontStore.registerHyphenationCallback((word) => word.split(""))
fontStore.register({
  family: "latin",
  fonts: [
    {
      src: "/System/Library/Fonts/Supplemental/Times New Roman.ttf",
      fontWeight: 400,
    },
    {
      src: "/System/Library/Fonts/Supplemental/Times New Roman Bold.ttf",
      fontWeight: 700,
    },
  ],
})
fontStore.register({
  family: "default",
  fonts: [
    // TODO bug?
    // {
    //   src: "/System/Library/Fonts/Supplemental/Songti.ttc",
    //   postscriptName: "STSongti-SC-Light",
    //   fontWeight: 300,
    // },
    {
      src: "/System/Library/Fonts/Supplemental/Songti.ttc",
      postscriptName: "STSongti-SC-Regular",
      fontWeight: 400,
    },
    {
      src: "/System/Library/Fonts/Supplemental/Songti.ttc",
      postscriptName: "STSongti-SC-Bold",
      fontWeight: 700,
    },
    {
      src: "/System/Library/Fonts/Supplemental/Songti.ttc",
      postscriptName: "STSongti-SC-Black",
      fontWeight: 900,
    },
  ],
})

// hijack: disable vertical puncuations
for (const font of Object.values(fontStore.getRegisteredFonts())) {
  for (const source of font.sources) {
    const { _load } = source
    source._load = async (...args) => {
      await _load.call(source, ...args)
      const font = source.data
      const { layout } = font
      font.layout = (text, features, ...args) => {
        // https://github.com/diegomura/react-pdf/blob/%40react-pdf/font%403.0.1/packages/textkit/src/layout/generateGlyphs.js#L63
        // TODO? new version includes features?
        // https://github.com/diegomura/react-pdf/blob/ee5c96b80326ba4441b71be4c7a85ba9f61d4174/packages/pdfkit/src/font/embedded.js#L35
        return layout.call(font, text, { vrt2: false, ...features }, ...args)
      }
    }
  }
}

export async function render(doc) {
  // TODO <Document> info
  const ctx = new PDFDocument({
    compress: true,
    // pdfVersion,
    // lang: language,
    displayTitle: true,
    autoFirstPage: false,
    // pageLayout,
    // pageMode,
    info: {
      // Title: title,
      // Author: author,
      // Subject: subject,
      // Keywords: keyboards,
      Creator: "react-pdf",
      Producer: "react-pdf",
      CreationDate: new Date(),
      // ModificationDate: modificationDate
    },
  })
  const layout = await layoutDocument(doc, fontStore)
  const fileStream = renderPDF(ctx, layout)
  return Readable.toWeb(fileStream)
}

if (import.meta.main) {
  const { default: Resume } = await import("./Resume.jsx")
  const stream = await render(<Resume />)
  await stream.pipeTo(Writable.toWeb(fs.createWriteStream("./BINXIN.pdf")))
  console.log("done")
}
