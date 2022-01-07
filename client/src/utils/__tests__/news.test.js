import { buildArticlePagination } from "../news";

describe("utils:news - buildArticlePagination()", () => {
  it("should payload be defined", () => {
    expect(buildArticlePagination([], 0, 0)).toBeDefined();
  });

  it("should return empty payload on non-articles", () => {
    const expectedPayload = {
      articles: [],
      currentPage: 1,
      pages: NaN,
    };
    expect(buildArticlePagination([], 0, 0)).toStrictEqual(expectedPayload);
  });

  it("should return 2 articles pages", () => {
    const articles = Array(10).fill("");
    const payload = buildArticlePagination(articles, 10, 5);

    expect(payload.articles.length).toBe(2);
    expect(payload.pages).toBe(2);
  });

  it("should return 10 articles pages", () => {
    const articles = Array(10).fill("");
    const payload = buildArticlePagination(articles, 10, 1);

    expect(payload.articles.length).toBe(10);
    expect(payload.pages).toBe(10);
  });
});
