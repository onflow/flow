
const visit = require("unist-util-visit")
const {Highlighter} = require("./highlighter");
const toHtml = require('hast-util-to-html')

let highlighter;

module.exports = async (page, pluginOptions = {}) => {
  const { markdownAST } = page

  const codeNodes = []

  visit(markdownAST, 'code', (node) => {
    if (node.lang) {
      codeNodes.push(node)
    } else {
      const path = page.markdownNode.fields.slug
      const {line} = node.position.start;
      console.warn(`Missing language tag in ${path} at line ${line}`)
    }
    return node
  })

  visit(markdownAST, 'inlineCode', (node) => {
    const match = node.value.match(/^(\w+)•(.*)$/)
    if (match) {
      node.lang = match[1]
      node.value = match[2]
      codeNodes.push(node)
    }
    return node
  })


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

      const isInline = node.type === 'inlineCode'

      const classes = [`language-${node.lang}`]
      if (isInline) {
        classes.push('inline')
      }

      node.type = 'html'
      node.value = toHtml(
        {
          type: "element",
          tagName: "pre",
          properties: {
            className: classes,
          },
          children: [
            {
              type: "element",
              tagName: "code",
              properties: {
                className: classes,
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




