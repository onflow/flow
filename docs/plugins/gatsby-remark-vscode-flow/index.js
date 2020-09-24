
const visit = require("unist-util-visit")
const {Highlighter} = require("./highlighter");
const toHtml = require('hast-util-to-html')

let highlighter;

module.exports = async (page, pluginOptions = {}) => {
  const { markdownAST } = page

  const codeNodes = []

  function visitor(node) {
    if (node.lang) {
      codeNodes.push(node)
    } else {
      const path = page.markdownNode.fields.slug
      const { line } = node.position.start;
      console.warn(`Missing language tag in ${path} at line ${line}`)
    }
    return node
  }

  visit(markdownAST, 'code', visitor)

  await Promise.all(
    codeNodes.map(async (node) => {

      if (!highlighter) {
        highlighter = await Highlighter.fromOptions(pluginOptions)
      }

      const grammar = await highlighter.getLanguageGrammar(node.lang)
      if (!grammar) {
        console.warn(`Failed to load grammar for language: ${node.lang}`)
        return node
      }

      const highlighted =
        highlighter.highlight(node.value, grammar)

      node.type = 'html'
      node.value = toHtml(
        {
          type: "element",
          tagName: "pre",
          properties: {
            className: [`language-${node.lang}`],
          },
          children: [
            {
              type: "element",
              tagName: "code",
              properties: {
                className: [`language-${node.lang}`],
              },
              children: highlighted,
            }
          ],
        }
      )

      return node
    })
  )
}




