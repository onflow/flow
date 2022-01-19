const sibling = "./";
const parent = "../";
const UNPREFIXED = -1;

function escapeRegExp(string) {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildDepthCheckRegex(depthSearch) {
  if (depthSearch === 0) return new RegExp("^" + escapeRegExp(sibling));
  return new RegExp("^" + escapeRegExp(parent.repeat(depthSearch)));
}

function updateRelativeDepth(url, forDepth, isIndex = false) {
  let noPrefixRegex = /^[\w-_]+/;

  if (url.match(noPrefixRegex)) {
    return updateUrl(url, UNPREFIXED, isIndex);
  }

  let depthCheckRegex = buildDepthCheckRegex(forDepth);
  let result = url.match(depthCheckRegex);

  if (result) {
    return updateUrl(url, forDepth, isIndex);
  }
}

function updateUrl(url, depth, index) {
  switch (index) {
    case true:
      return depth === UNPREFIXED || 0 ? sibling + url : url;
    case false:
      return depth === UNPREFIXED || 0
        ? parent + url
        : url.replace(buildDepthCheckRegex(depth), parent.repeat(depth + 1));
  }
}

module.exports = {
  buildDepthCheckRegex,
  updateRelativeDepth,
  updateUrl
};
