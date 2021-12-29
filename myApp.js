var express = require("express");
var app = express();

console.log("hello world");

app.get("/", (req, res) => {
  console.log("Hello Express");
});

module.exports = app;
