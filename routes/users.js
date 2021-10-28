var express = require('express');
var router = express.Router();
var x=Math.random();

/* GET users listing. */
router.get('/', function(req, res, next) {
  val= Math.cosh(x);
  res.send('Total value is'+val);
});

module.exports = router;
