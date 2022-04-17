const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

mongoose.connect('mongodb+srv://admin-vineeth:test123@cluster0.pjsb2.mongodb.net/ctcDB');

const postSchema = {
  companyName: String,
  industry: String,
  designation: String,
  education: String,
  yearOfJoining: Number ,
  experience: Number,
  ctc: Number,
  workingHours: Number,
  perks: String,
  culture: String,
  friends: String,
  value: String,
  staffing: String,
  load: String,
  promotion: String,
  happy: String,
  misc: String,
};

const Post = mongoose.model("Post", postSchema);

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.render("ctc");
});

app.get("/our-ctc", function(req,res){
  Post.find({},function(err,Posts){
      res.render('our-ctc', {Posts:Posts});
  });
});

app.get("/our-ctc/:postId", function(req,res){
  const requestedPostId = req.params.postId;
  Post.findOne({_id: requestedPostId}, function(err, Post){
    if(!err){
         res.render("post", {Post: Post});
    } else {
      res.render("sample");
    }
 });
});

app.post("/", function(req,res){
const post = new Post({
  companyName: req.body.companyName,
  industry: req.body.industry,
  designation: req.body.designation,
  education: req.body.education,
  yearOfJoining: req.body.yearOfJoining,
  experience: req.body.experience,
  ctc: req.body.ctc,
  workingHours: req.body.workingHours,
  perks: req.body.perks,
  culture: req.body.culture,
  friends: req.body.friends,
  value: req.body.value,
  staffing: req.body.staffing,
  load: req.body.load,
  promotion: req.body.promotion,
  happy: req.body.happy,
  misc: req.body.misc,
 });

 post.save(function(err){
  if(!err){
  res.redirect("/our-ctc");
  }
  });

});







let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started successfully");
});
