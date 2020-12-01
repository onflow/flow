const path = require("path");

describe("app", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:9000");
  });

  it("Should work.", async () => {
    await expect(page.title()).resolves.toMatch("Getting Started");
  });
});
