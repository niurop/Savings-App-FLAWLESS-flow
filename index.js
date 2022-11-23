var express = require("express");
var app = express();

var server = app.listen(5000, function () {
  console.log("Node server is running..");
});

app.get("/", function (req, res) {
  res.send("HELLO WORLD!");
});
