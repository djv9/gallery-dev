var express = require('express');
// var mongoose = require('mongoose');
require('express-mongoose');
var User = require('../models/user');


function index(req, res, next){
    // var user = new User({name:'Jack', pwd: 'jack',age:'5',group:'admin'});
    // user.save(err => console.log(err));
    console.log(User.find())
    res.send(User.find());
};

module.exports = index;