var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aldo and JS are friends... But I prefer Go or Python 🌚' });
});

module.exports = router;
