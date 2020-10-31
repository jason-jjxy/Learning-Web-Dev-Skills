var express = require("express");
var app = express();

//1. Visiting "/" should print "Hi there, welcome to my assignment!"
app.get("/", function (req, res) {
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function (req, res) {
  var type = req.params.animal;
  if (type == "pig") {
    res.send("The pig says 'Oink'");
  } else if (type == "cow") {
    res.send("The cow says 'Moo'");
  } else if (type == "dog") {
    res.send("The dog says 'Woof Woof'!");
  } else if (type == "cat") {
    res.send("The cat says 'Meow'");
  } else if (type == "turtle") {
    res.send("The turtle says 'HEEYYYYYYYYY'");
  } else {
    res.send("I dont know what " + type + " says!");
  }
});

app.get("/repeat/:word/:timesRepeat", function (req, res) {
  var word = req.params.word;
  var converted = parseInt(req.params.timesRepeat, 10);
  var result = "";
  for (var i = 0; i < converted; i++) {
    result = result + " " + word;
  }
  res.send(result);
});

app.get("*", function (req, res) {
  res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function () {
  console.log("Server Listening on port 3000");
});
