var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.sendFile(__dirname + '/../data/flare.json');
  res.render('index.html');
});


module.exports = router;
