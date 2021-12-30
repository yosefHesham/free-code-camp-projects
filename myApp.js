require("dotenv").config();
var express = require("express");
const logger = require("./middlewares/logger");
var app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  const path = __dirname + "/views/index.html";
  res.sendFile(path);
});
app.get("/json", logger, (req, res) => {
  let mssg = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    mssg = "HELLO JSON";
  }
  res.json({
    message: mssg,
  });
});

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);
app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

app.get("/name", (req, res) => {
  const first = req.query.first;
  const last = req.query.last;
  res.json({ name: `${first} ${last}` });
});
module.exports = app;
