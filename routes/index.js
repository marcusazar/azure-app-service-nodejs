var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { airplaneName: 'Airbus A340' });
});

module.exports = router;
