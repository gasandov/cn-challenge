const buildArguments = (params) => ({
  q: params.q,
  ...(params?.sources && { sources: params.sources }),
  ...(params?.country && { sources: params.country }),
  ...(params?.category && { category: params.category }),
  ...(params?.language && { sources: params.language }),
});

module.exports = { buildArguments };
