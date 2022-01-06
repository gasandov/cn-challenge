module.exports = (req, res, error) => {
  const type = error.name;
  switch (type) {
    case "ValidationError":
      res.status(403).send(error.message);
      break;
    default:
      res.status(500).send("Server error");
      break;
  }
};
