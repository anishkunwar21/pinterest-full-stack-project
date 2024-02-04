var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const plm=require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/hehe")
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  profileImage:{
    type:String
  },
  pins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pin'
    }
  ],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // This references the User model itself
  }]
});
userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);

