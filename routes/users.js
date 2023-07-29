
// const express = require('express');  
var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/livinart")
const userSchema= mongoose.Schema({
  name:String,
  lastname:String,
  phoneNumber: String,
  email: String,
  message: String,
  code: String,
  comment:String,
  date:String,
  time:String,

})
module.exports = mongoose.model("users", userSchema);
