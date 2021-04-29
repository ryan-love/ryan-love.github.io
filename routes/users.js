var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Array.prototype.insert = function ( idx, i ) {
    this.splice( idx, 0, i );
  };


  this.arr = []


  for (let i = 0; i < 800; i++) {
    this.arr[i] = new Array(800)
    for (let j = 0; j < this.arr[i].length; j++){
      this.arr[i][j] = 0
    }
  }
  for (let i = 99; i < 600  ; i++) {
    this.arr[i].insert(99,1)
  }
  //res.json({this.arr})
});

module.exports = router;
