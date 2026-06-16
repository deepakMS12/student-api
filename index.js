const express = require("express");

const app = express();

app.get("/msg", (req, res) => {
  throw new Error("Server crash!");
});
app.listen(3000, () => {
  console.log("Server running");
});

module.exports = app;