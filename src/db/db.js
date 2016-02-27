var mongoose = require('mongoose');

var MONGO_URI = 'mongodb://localhost/katasee_db';

var db = mongoose.connection;
mongoose.connect(MONGO_URI);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  console.log('connected to ', MONGO_URI);

  var kittySchema = mongoose.Schema({
   	name: String
  });
  var Kitten = mongoose.model('Kitten', kittySchema);
  var fluffy = new Kitten({ name: 'fluffy' });
  fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
    console.log("saved fluffy");
  });

});

module.exports = db;