var express = require("express");
var app = express();

console.log("hello world");

app.get("/", (req, res) => {
  res.send("Hello Express");
});

module.exports = app;
