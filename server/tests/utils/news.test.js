const { buildHeadlineArguments } = require("../../src/utils/news");

describe("utils:news - buildHeadlineArguments()", () => {
  it("should object be defined after execution", () => {
    const params = { q: "hello" };
    expect(buildHeadlineArguments(params)).toBeDefined();
  });

  it("should not contain invalid param", () => {
    const params = { invalid: "param" };
    expect(buildHeadlineArguments(params)).not.toHaveProperty("invalid");
  });

  it("should optional params be defined", () => {
    const params = {
      q: "hello",
      country: "mx",
      page: 1,
    };
    expect(buildHeadlineArguments(params)).toHaveProperty("country", "mx");
    expect(buildHeadlineArguments(params)).toHaveProperty("page", 1);
  });
});
