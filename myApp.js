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
    req.time = (Date.now() + 20).toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);
module.exports = app;
