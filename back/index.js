'use strict';

var http = require("http");
var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config/database');

var cors = require('cors');
var passport= require('passport')

var bcrypt = require("bcryptjs");
mongoose.connect('mongodb://localhost:27017/pack');
var app = express();
app.use(cors({
	allowedHeaders: ["Content-type","Autorization"]
}));

// parse application/x-www-form-urlencoded
app.use(cors({
	allowedHeaders: ["Content-type","Autorization"]
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// Routes
// Get Index
app.get("/", function(req, res){
	res.end("Index")
})

var users = require('./routes/profile_routes.js')
app.use('/api/users', users);


app.listen(5000, function(err){
	if (err) {
		console.error(err)
	} else {
		console.log("Server running")
	}
});
