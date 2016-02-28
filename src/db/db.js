var mongoose = require('mongoose');
var rateRecord = require('./rate-record');

var fs = require('fs');

fs.readFile('data/krtrates.data.csv', 'utf8', function(err, contents) {
    console.log(contents);
});

console.log('after calling readFile');

var MONGO_URI = 'mongodb://localhost/katasee_db';

var db = mongoose.connection;
mongoose.connect(MONGO_URI);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  console.log('connected to ', MONGO_URI);


});

var krtRecord = new rateRecord();
krtRecord.save(function (err, krtRecord) {
	if (err) { return console.error(err) };
	console.log("saved krtRecord");
});

module.exports = db;
