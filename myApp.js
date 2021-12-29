var express = require("express");
var app = express();

console.log("hello world");

app.use("/public", express.static(__dirname + "/public"));

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

app.get("/", (req, res) => {
  const path = __dirname + "/views/index.html";
  res.sendFile(path);
});

app.get("/json", (req, res) => {
  res.send({ message: "Hello json" });
});

module.exports = app;
