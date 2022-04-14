const express = require("express");
const app = express();
const game = require("./routes/gameOfTrhones");
const poke = require("./routes/pokeapi");

app.use(game);
app.use(poke);

const PORT = 3080;
app.listen(PORT, () => {
  console.log("Server started on port: " + PORT);
});
