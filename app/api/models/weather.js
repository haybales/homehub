'use strict';

var mongoose = require('mongoose');

// todo.name
// todo.completed

var weatherSchema = new mongoose.Schema({
  stationid: String,
  temp: String,
  humidity: String,
  brightness: String,
  datetime: String
});

var model = mongoose.model('Weather', weatherSchema);

module.exports = model;
