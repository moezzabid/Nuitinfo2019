'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var bcrypt = require("bcryptjs");
var ExerciceSchema = new Schema({
id_exercice: {
  type: String,
  required: true
  },
  nom_exercice: {
		type: String,
		required: true
	},
  var exercice = module.exports = mongoose.model('exercice', ExerciceSchema);
