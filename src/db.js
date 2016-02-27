var mongoose = require('mongoose');


var db = mongoose.connection;
mongoose.connect('mongodb://localhost/test');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongoose connected');

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