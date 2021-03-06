"use strict";

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

/**
 * @swagger
 * paths:
 *  /api/news:
 *    post:
 *      summary: Gets news based on keyword
 *      tags:
 *        - news
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                q:
 *                  type: string
 *                  required: true
 *      responses:
 *        200:
 *          description: Get news based on keyword.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  articles:
 *                    type: array
 */
const getNews = async (req, res) => {
  try {
    const params = await paramsOfEverything.validate(req.body);
    const payload = buildEveythingArguments(params);

    const response = await newsClient.v2.everything(payload);

    res.send(response);
  } catch (error) {
    handleApiErrors(req, res, error);
  }
};

/**
 * @swagger
 * paths:
 *  /api/news/headlines:
 *    post:
 *      summary: Gets headlings based on term
 *      tags:
 *        - news
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                q:
 *                  type: string
 *                  required: true
 *      responses:
 *        200:
 *          description: Get news based on keyword.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  articles:
 *                    type: array
 */
const getHeadlines = async (req, res) => {
  try {
    const params = await paramsOfHeadlines.validate(req.body);
    const payload = buildHeadlineArguments(params);

    const response = await newsClient.v2.topHeadlines(payload);

    res.send(response);
  } catch (error) {
    handleApiErrors(req, res, error);
  }
};

module.exports = { getNews, getHeadlines };
