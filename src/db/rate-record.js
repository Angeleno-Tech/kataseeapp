var mongoose = require('mongoose');
var fs = require('fs');
var csv = require('csv');

var rateRecord = mongoose.Schema({
  description: String,
  comment: String,
  space: String,
  pos_neg: String,
  cr: String,
  ID: Number,
  print: Boolean,

  rate_1: Number,
  rate_2: Number,
  rate_3: Number,

  freq_1: Number,
  freq_2: Number,
  freq_3: Number,
  freq_4: Number,
  freq_5: Number,
  freq_6: Number
});

module.exports = import_csv_data = function(app) {
  console.log("csv data");
};

var RateRecord = mongoose.model('RateRecord', rateRecord);

module.exports = RateRecord;


var parser = csv.parse();


fs.readFile('data/krtrates.data.csv', 'utf8', function(err, contents) {
  if (err) {
    console.log(err);
    return;
  };
  console.log('length', contents.length);
  parser.write(contents);
});

parser.on('readable', function(){
  while(data = parser.read()) {
    console.log("data: ", data);
    // transformer.write(data);
    var rateRecord = new RateRecord();
    rateRecord.save(function (err, rateRecord) {
      if (err) { return console.error(err) };
      console.log("saved rateRecord");
    });
  }
});

