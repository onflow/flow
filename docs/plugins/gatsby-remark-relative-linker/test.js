const test = require("ava");
const updateRelativeDepth = require("./functions");

test("Handles unprefixed links", (t) => {
  const initial = "hello.md";
  const expected = "../hello.md";

  const result = updateRelativeDepth(initial, false);

  t.is(result, expected);
});

test("Updates relative depth 0", (t) => {
  const initial = "./hello.md";
  const expected = "../hello.md";

  const result = updateRelativeDepth(initial, false);

  t.is(result, expected);
});

test("Updates relative depth 1", (t) => {
  const initial = "../hello.md";
  const expected = "../../hello.md";

  const result = updateRelativeDepth(initial, false);

  t.is(result, expected);
});

test("Updates relative depth 2", (t) => {
  const initial = "../../hello.md";
  const expected = "../../../hello.md";

  const result = updateRelativeDepth(initial, false);

  t.is(result, expected);
});

test("Handles unprefixed routes in index pages", (t) => {
  const initial = "hello.md";
  const expected = "./hello.md";

  const isIndex = true;
  const result = updateRelativeDepth(initial, isIndex);

  t.is(result, expected);
});

test("Handles other routes in index pages, depth 0", (t) => {
  const initial = "./hello.md";
  const expected = "./hello.md";

  const result = updateRelativeDepth(initial, true);

  t.is(result, expected);
});

test("Handles other routes in index pages", (t) => {
  const initial = "../hello.md";
  const expected = "../hello.md";

  const result = updateRelativeDepth(initial, true);

  t.is(result, expected);
});
