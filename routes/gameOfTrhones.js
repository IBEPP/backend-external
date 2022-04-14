const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/game-of-thrones/json", (req, res, next) => {
  res.json(data);
});

router.get("/game-of-thrones/url", (req, res, next) => {
  axios.get("https://thronesapi.com/api/v2/Characters").then((response) => {
    res.json(response.data);
  });
});

module.exports = router;
