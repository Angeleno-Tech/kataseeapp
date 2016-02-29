var mongoose = require('mongoose');
var rateRecord = require('./rate-record');

var MONGO_URI = 'mongodb://localhost/katasee_db';

var db = mongoose.connection;
mongoose.connect(MONGO_URI);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to ', MONGO_URI);
});

module.exports = db;
