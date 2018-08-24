var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal/", function(req, res){
  console.log(req.params);
  var animals = req.params.animal;
  var say = {
    pig: 'Oink',
    cow: 'Moo',
    dog: 'Woof Woof!'
  }
  res.send("The " + animals + " says '" + say[animals] + "'");
});

app.get("/repeat/:word/:num", function(req, res){
  console.log(req.params);
  var word = req.params.word;
  var val = req.params.num;
  var words = "";
  for(var i = 0; i <val; i++){
    var words = words + " " + word;
  }
  res.send(words);
});

app.get("*", function(req, res){
    res.send("Sorry, page nor found..What are you doing with your life!");
});


app.listen(3000, function(){
    console.log("Server has started on port 3000!");
});
