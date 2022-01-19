const sibling = "./";
const parent = "../";
const UNPREFIXED = -1;

function* depthSearch(n) {
  for (let i = n; i > -1; i--) yield i;
}

function escapeRegExp(string) {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildDepthCheckRegex(depth) {
  if (depth === 0) return new RegExp("^" + escapeRegExp(sibling));
  return new RegExp("^" + escapeRegExp(parent.repeat(depth)));
}

function doUpdate(url, forDepth, isIndex = false) {
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

function updateRelativeDepth(url, isIndex, MAX_DEPTH_SEARCH = 6) {
  for (const depth of depthSearch(MAX_DEPTH_SEARCH)) {
    const updatedURL = doUpdate(url, depth, isIndex);
    if (updatedURL) {
      return updatedURL;
    }
  }
  return url;
}

module.exports = {
  doUpdate,
  buildDepthCheckRegex,
  updateRelativeDepth,
  updateUrl
};
