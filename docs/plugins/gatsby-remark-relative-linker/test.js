const test = require("ava");
const { updateRelativeDepth } = require("./functions");

test("Updates relative depth 1", (t) => {
  const initial = "./hello.md";
  const expected = "../hello.md";

  const result = updateRelativeDepth(initial, 1, false);

  t.is(result, expected);
});

test("Updates relative depth 2", (t) => {
  const initial = "../hello.md";
  const expected = "../../hello.md";

  const result = updateRelativeDepth(initial, 2, false);

  t.is(result, expected);
});

test("Updates relative depth 3", (t) => {
  const initial = "../../hello.md";
  const expected = "../../../hello.md";

  const result = updateRelativeDepth(initial, 3, false);

  t.is(result, expected);
});
