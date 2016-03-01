var express = require('express');
var router = express.Router();
var RateRecord = require('../src/db/rate-record');


router.get('/', function(req, res, next) {
  var searchValue = req.query['value'];
  var terms = searchValue.split(',');
  var regex = '';
  for (var i = 0; i < terms.length; i++) {
    regex = regex.concat(terms[i].trim());
    if (i < terms.length - 1) {
      regex = regex.concat('|');
    }
  }

  var query = RateRecord.find().or(
    [
      {'ITEM': new RegExp(regex, 'i')},
      {'COMMENT': new RegExp(regex, 'i')}
    ]
  ).sort('ITEM');

  query.exec(function (err, rate) {
    if (err) { return handleError(err) };
    res.render('search', {searchResults: rate, searchValue: searchValue})
  })

});

module.exports = router;
