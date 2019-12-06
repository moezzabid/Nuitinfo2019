'use strict';

var express = require('express');
var router = express.Router();
var Profile = require ('./../models/profile.js');
var async = require('async');
var jwt = require('jsonwebtoken');
var bcrypt = require("bcryptjs");
var config = require('./../config/database');


var path = require('path');

// Post new person
router.post("/", function(req, res, next){
	try {
		async.waterfall([
			(callback)=>{
				Profile.findOne({email: req.body.email}, (err, user_exist ) => {
					if (err) {return next(err);}
					else if (user_exist) {
						res.json({success:false, description:'post new user', message: 'user registred failed'})
					} else {
						callback();
					}
				})
			},
			(callback) => {

				let new_user = new Profile({
					name: req.body.name,
					surname: req.body.surname,
					email: req.body.email,
					phone: req.body.phone,
					password: req.body.password,
					sexe:req.body.sexe,
          birthbirth:req.body.birth,
				})

				new_user.save((err, user) => {
					if (err) {return next(err)}
					else{

						callback(null,user);
					}
				})
			}
		], (err, results) => {
			res.json({success:true,description:"post new person", message:"user registred", data: results})
		})
	} catch (err) {
		console.error({
			success:false,
			description:"post new user",
			message:" user registred failed",
			error: err
		})
	}
})
