const visit = require("unist-util-visit");
const path = require("path");

module.exports = ({ markdownAST }) => {
  visit(markdownAST, "link", (node) => {
    if (
      node.url &&
      !node.url.startsWith("//") &&
      !node.url.startsWith("http") &&
      node.url.startsWith("/")
    ) {
      node.url = node.url.replace(
        /(.*)\.(\w{2}).(md|mdx)(#.*)?$/,
        (match, base, language, hash) => {
          return `/${language}${path.parse(base).name}${hash}`;
        }
      );
    }
  });

  return markdownAST;
};
