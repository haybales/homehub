'use strict';

var express = require('express');
var Weather = require('./models/weather');

var router = express.Router();

router.get('/weather', function(req, res){
  Weather.find({}, function(err, weathers){
    if(err){
      res.status(500).json({message: err.message});
    }
    res.json({posts: weathers});
  });
});


module.exports = router;
