var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function (req, res) {
  res.send("Hi there!"); //expect to get hi there from browser, missing - in express have to tell code to listen for requests
});
// "/bye" => "Goodbye!"
app.get("/bye", function (req, res) {
  res.send("hhhhhhhh");
});
// "/dog" => "meow!"
app.get("/dog", function (req, res) {
  res.send("Someone made a request for a dog?");
});

//the colon allows the user to be able to change
//req has to do with all the requests coming in

app.get("/r/:subredditName", function (req, res) {
  var subreddit = req.params.subredditName;
  res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit");
});

app.get("/r/:subredditName/comments/:id/:title/", function (req, res) {
  console.log(req.params);
  res.send("Welcome to the comments page!");
});

app.get("*", function (req, res) {
  res.send("You're a star");
});

// Tells express to listen for rquests ( start server)
app.listen(3000, function () {
  console.log("Server listening on port 3000");
});

/*
- if the star operator is above all other requests, then all requests
will be to star
*/
