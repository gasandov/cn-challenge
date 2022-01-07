/**
 * @description Filter non-accepted arguments and filling the provided and allowed ones
 * for headline endpoint
 * @param {object} params
 * @returns {object}
 */
const buildHeadlineArguments = (params) => ({
  q: params.q,
  ...(params?.country && { sources: params.country }),
  ...(params?.category && { category: params.category }),
  ...(params?.sources && { sources: params.sources }),
  ...(params?.pageSize && { pageSize: params.pageSize }),
  ...(params?.page && { page: params.page }),
});

/**
 * @description Filter non-accepted arguments and filling the provided and allowed ones
 * for everything endpoint
 * @param {object} params
 * @returns {object}
 */
const buildEveythingArguments = (params) => ({
  q: params.q,
  ...(params?.qInTitle && { qInTitle: params.qInTitle }),
  ...(params?.sources && { sources: params.sources }),
  ...(params?.domains && { domains: params.domains }),
  ...(params?.excludeDomains && { excludeDomains: params.excludeDomains }),
  ...(params?.from && { from: params.from }),
  ...(params?.to && { to: params.to }),
  ...(params?.language && { language: params.language }),
  ...(params?.sortBy && { sortBy: params.sortBy }),
  ...(params?.pageSize && { pageSize: params.pageSize }),
  ...(params?.page && { page: params.page }),
});

module.exports = { buildHeadlineArguments, buildEveythingArguments };
