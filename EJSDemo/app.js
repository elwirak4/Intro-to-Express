var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs"); //see all files from view dir as .ejs

app.get("/", function(req, res){
  res.render("home");  //now i do not need .ejs in the name of the file
});

app.get("/fallinlovewith/:thing", function(req, res){
  var thing = req.params.thing;
  res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
  var posts = [
    {title: "Post 1", author: "Susy"},
    {title: "My adorable pet bunny", author: "Charlie"},
    {title: "Can you belive this pomsky?", author: "Susy"},
  ];
  res.render("posts", {posts: posts})
})

app.listen(3000, function(){
  console.log("Server has started on port 3000!");
});
