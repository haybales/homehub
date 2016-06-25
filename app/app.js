'use strict';

var express =  require('express');
var parser = require('body-parser');

var app = express();

app.use('/', express.static('public'));
app.use(parser.json());

app.listen(3000, function(){
  console.log("Server running on port 3000.");
});
