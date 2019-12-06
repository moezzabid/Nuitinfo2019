'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var bcrypt = require("bcryptjs");
var RegimeSchema = new Schema({
id_regime: {
  type: String,
  required: true
  },
  nom_de_repat: {
		type: String,
		required: true
	},
  complement_eleme: {
		type: String,
		required: true
	},
  var exercice = module.exports = mongoose.model('exercice', ExerciceSchema);
