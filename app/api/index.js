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

router.post('/weather', function(req, res){
  var weather = req.body;
  Weather.create(weather, function(err, weather){
    if(err){
      return res.status(500).json({err: err.message});
    }
    res.json({weather: weather, message: 'Weather point added'});
  });
});

module.exports = router;
