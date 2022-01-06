const yup = require("yup");
const {
  MAX_PAGE_SIZE,
  AVAILABLE_SORTING,
  AVAILABLE_LANGUAGES,
  AVAILABLE_COUNTRIES,
} = require("../constants/news");

const paramsOfHeadlines = yup.object({
  country: yup.string().oneOf(AVAILABLE_COUNTRIES),
  category: yup.string(),
  sources: yup.string(),
  q: yup.string(),
  pageSize: yup.number().max(MAX_PAGE_SIZE),
  page: yup.number(),
});

const paramsOfEverything = yup.object({
  q: yup.string().required(),
  qInTitle: yup.string(),
  sources: yup.string(),
  domains: yup.string(),
  excludeDomains: yup.string(),
  from: yup.date(),
  to: yup.date(),
  language: yup.string().oneOf(AVAILABLE_LANGUAGES),
  sortBy: yup.string().oneOf(AVAILABLE_SORTING),
  pageSize: yup.number().max(MAX_PAGE_SIZE),
  page: yup.number(),
});

module.exports = {
  paramsOfHeadlines,
  paramsOfEverything,
};
