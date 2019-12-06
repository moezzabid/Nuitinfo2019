'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var EntraitementSchema = new Schema({
  id_entrait: {
		type: String,
		required: true
	},
	nb_jours: {
		type: Number,
		required: true
	},
