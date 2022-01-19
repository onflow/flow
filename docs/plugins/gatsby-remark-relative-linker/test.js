const test = require("ava");
const { updateRelativeDepth } = require("./functions");

test("Handles unprefixed routes", (t) => {
  const initial = "hello.md";
  const expected = "../hello.md";

  const result = updateRelativeDepth(initial, 0, false);

  t.is(result, expected);
});

test("Updates relative depth 0", (t) => {
  const initial = "./hello.md";
  const expected = "../hello.md";
  1;
  const result = updateRelativeDepth(initial, 0, false);

  t.is(result, expected);
});

test("Updates relative depth 1", (t) => {
  const initial = "../hello.md";
  const expected = "../../hello.md";

  const result = updateRelativeDepth(initial, 1, false);

  t.is(result, expected);
});

test("Updates relative depth 2", (t) => {
  const initial = "../../hello.md";
  const expected = "../../../hello.md";

  const result = updateRelativeDepth(initial, 2, false);

  t.is(result, expected);
});

test("Handles unprefixed routes in index pages", (t) => {
  const initial = "hello.md";
  const expected = "./hello.md";

  const result = updateRelativeDepth(initial, 1, true);

  t.is(result, expected);
});

test("Handles other routes in index pages", (t) => {
  const initial = "./hello.md";
  const expected = "./hello.md";

  const result = updateRelativeDepth(initial, 0, true);

  t.is(result, expected);
});
