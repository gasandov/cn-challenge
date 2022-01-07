const { SERVER_ERROR, BAD_REQUEST } = require("../constants/http-status-codes");

module.exports = (req, res, error) => {
  const type = error.name;
  switch (type) {
    case "ValidationError":
      res.status(BAD_REQUEST).send(error.message);
      break;
    default:
      res.status(SERVER_ERROR).send("Server error");
      break;
  }
};
