export const buildArticlePagination = (
  articles,
  totalResults,
  pageSize = 10
) => {
  const payload = {
    pages: 0,
    articles: [],
    currentPage: 1,
  };

  const articlesCopy = articles.slice();
  const actualTotalResultsCount =
    totalResults === articlesCopy.length ? totalResults : articlesCopy.length;
  payload.pages = Math.round(actualTotalResultsCount / pageSize);

  while (articlesCopy.length) {
    const articlesChunk = articlesCopy.splice(0, pageSize);
    payload.articles.push(articlesChunk);
  }

  return payload;
};
