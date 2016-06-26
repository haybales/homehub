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

router.get('/weather/:id', function(req, res){
  var id = req.params.id;
  Weather.find({_id: id}, function(err, weathers){
    if(err){
      return res.status(500).json({message: err.message});
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

router.put('/weather/:id', function(req, res){
  var id = req.params.id;
  var weather = req.body;
  if(weather && weather._id !== id){
    return res.status(500).json({err: 'Ids dont match'});
  }
  Weather.findByIdAndUpdate(id, weather, {new: true}, function(err, weather){
    if(err){
      return res.status(500).json({err: err.message});
    }
    res.json({weather: weather, message: 'Weather point updated'});
  });
});

router.delete('/weather/:id', function(req, res){
  var id = req.params.id;
  Weather.findByIdAndRemove(id, function(err){
    if(err){
      return res.status(500).json({err: err.message});
    }
    res.json({message: 'Weather point deleted'});
  });
});

module.exports = router;
