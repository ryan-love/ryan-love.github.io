var express = require('express');
var router = express.Router();
var easystarjs = require('easystarjs');
var easystar = new easystarjs.js();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,easystar});
});


module.exports = router;
