'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var bcrypt = require("bcryptjs");
var ProfileSchema = new Schema({
  name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
  email:{
    type: String,
    required: true
  },
  sexe:{
    type: String,
    required: true
  },
  datedeNaissance:{
    type: String,
    required: true
  }});
  ProfileSchema.pre('save', function(next){
    var coffe = this;
      bcrypt.hash(coffe.password, 10 ,function (err,hash) {
        if(err){return nes (err);}
        else{
            coffe.password= hash;
            next();
        }
    })
  })
  //export
  var profile = module.exports = mongoose.model('profile', ProfileSchema);
