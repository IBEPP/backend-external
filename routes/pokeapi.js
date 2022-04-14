const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/pokemon/:limit/:offset", (req, res, next) => {
  const limit = req.params.limit;
  const offset = req.params.offset;
  axios(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((response) => {
    res.json(response.data);
  });
});

router.get("/pokemon/:id", (req, res, next) => {
  const id = req.params.id;
  axios(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
    res.json(response.data);
  });
});

module.exports = router;
