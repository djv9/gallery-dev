var express = require('express');
var router = express.Router();


function index(req, res, next){
//   res.json({name:'aaa',pwd:'123'});
  res.send("test");
};

module.exports = index;