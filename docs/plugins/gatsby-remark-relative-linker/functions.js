const SIBLING = "./";
const PARENT = "../";
const UNPREFIXED = -1;


function* depthCheck(n) {
  for (let i = n; i > -1; i--) yield i;
}

function escapeRegExp(string) {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildDepthCheckRegex(depth) {
  if (depth === 0) return new RegExp("^" + escapeRegExp(SIBLING));
  return new RegExp("^" + escapeRegExp(PARENT.repeat(depth)));
}

function doUpdateDepth(linkText, forDepth, isIndex = false) {
  let noPrefixRegex = /^[\w-_]+/;

  if (linkText.match(noPrefixRegex)) {
    return updateLinkText(linkText, UNPREFIXED, isIndex);
  }

  let depthCheckRegex = buildDepthCheckRegex(forDepth);
  let result = linkText.match(depthCheckRegex);

  if (result) {
    return updateLinkText(linkText, forDepth, isIndex);
  }
}

function updateLinkText(linkText, depth, index) {
  switch (index) {
    case true:
      return depth === UNPREFIXED ? SIBLING + linkText : linkText;
    case false:
      return depth === UNPREFIXED || 0
        ? PARENT + linkText
        : linkText.replace(
            buildDepthCheckRegex(depth),
            PARENT.repeat(depth + 1)
          );
  }
}

function updateRelativeDepth(linkText, isIndex, MAX_DEPTH_CHECK = 6) {
  for (const depth of depthCheck(MAX_DEPTH_CHECK)) {
    const updatedLinkText = doUpdateDepth(linkText, depth, isIndex);
    if (updatedLinkText) {
      return updatedLinkText;
    }
  }
  return linkText;
}

module.exports = updateRelativeDepth;
