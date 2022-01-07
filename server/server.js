const path = require("path");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const newsRouter = require("./src/routes/news.route");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/news", newsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
