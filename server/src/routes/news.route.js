"use strict";

const { Router } = require("express");
const { getNews, getHeadlines } = require("../controllers/news.controller");

const router = Router();

router.route("/").post(getNews);

router.route("/headlines").post(getHeadlines);

module.exports = router;
