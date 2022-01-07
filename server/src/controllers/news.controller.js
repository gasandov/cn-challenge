const newsAPI = require("newsapi");
const {
  buildHeadlineArguments,
  buildEveythingArguments,
} = require("../utils/news");
const handleApiErrors = require("../utils/handle-api-errors");
const {
  paramsOfHeadlines,
  paramsOfEverything,
} = require("../validations/news");

const newsClient = new newsAPI(process.env.NEWS_API_KEY);

const getNews = async (req, res) => {
  try {
    const params = await paramsOfEverything.validate(req.body);
    const arguments = buildEveythingArguments(params);

    const response = await newsClient.v2.everything(arguments);

    res.send(response);
  } catch (error) {
    handleApiErrors(req, res, error);
  }
};

const getHeadlines = async (req, res) => {
  try {
    const params = await paramsOfHeadlines.validate(req.body);
    const arguments = buildHeadlineArguments(params);

    const response = await newsClient.v2.topHeadlines(arguments);

    res.send(response);
  } catch (error) {
    handleApiErrors(req, res, error);
  }
};

module.exports = { getNews, getHeadlines };
