const path = require("path");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const newsRouter = require("./src/routes/news.route");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "CN Challenge",
    version: "1.0.0",
  },
};
const options = {
  swaggerDefinition,
  apis: ["./src/controllers/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/news", newsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
