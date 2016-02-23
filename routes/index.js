var express = require('express');
var router = express.Router();
var crud = require('./../crud.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'URL Shortener' });
});

router.get('/:query', function(req, res, next) {
  var website = req.params.query;
  var ranGen = Math.round(Math.random()*100000);
  crud.addWebsite(website, ranGen);
  res.render('index', { result: 'Original URL: ' + website,
                        shortURL: 'ShortURL: https://shorterner2-shaunyap.c9users.io/go/' + ranGen
  });
});

router.get('/go/:query', function(req, res, next) {
    crud.findWebsiteID(req.params.query);
});

module.exports = router;
