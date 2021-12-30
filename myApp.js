require("dotenv").config();
var express = require("express");
var app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  const path = __dirname + "/views/index.html";
  res.sendFile(path);
});
app.get("/json", (req, res) => {
  let mssg = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    mssg = "HELLO JSON";
  }
  res.json({
    message: mssg,
  });
});
module.exports = app;
