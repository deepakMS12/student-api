const express = require("express");

const app = express();

app.get("/msg", (req, res) => {
    res.send({ message: "Student API Working" });
});
app.listen(3000, () => {
  console.log("Server running");
});

module.exports = app;