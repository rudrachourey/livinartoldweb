
// const express = require('express');  
var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/comment")
const commentSchema= mongoose.Schema({
  name:String,
  email:String,
  comment: String

})
module.exports = mongoose.model("users", commentSchema);
