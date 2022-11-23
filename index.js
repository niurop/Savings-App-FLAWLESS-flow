var cookieParser = require("cookie-parser");
var express = require("express");
var fs = require("fs");

var app = express();
app.use(cookieParser());

app.get("/", function (req, res) {
  let website = fs.readFileSync("webpage/index.html", "utf8");
  res.send(website);
});

var server = app.listen(5000, function () {
  console.log("Node server is running..");
});
