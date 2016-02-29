var express = require('express');
var router = express.Router();
var RateRecord = require('../src/db/rate-record');


/* GET users listing. */
router.get('/', function(req, res, next) {
  var searchValue = req.query['value'];
  console.log('search for:', searchValue);
  // res.send('search results');
  // find each person with a last name matching 'Ghost'
  var regex = '/' + searchValue + '/'
  console.log("regex = ", regex);
  var query = RateRecord.find({
    'ITEM': new RegExp(searchValue, 'i')
  });

  // execute the query at a later time
  query.exec(function (err, rate) {
    if (err) return handleError(err);
    console.log('rate: ', rate) // Space Ghost is a talk show host.
    // res.send(rate);
    res.render('search', {searchResults: rate})
  })


  // console.log("results: ", results);
  // res.render('search', { title: 'Search results' });
});

module.exports = router;
