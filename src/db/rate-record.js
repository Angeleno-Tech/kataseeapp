var mongoose = require('mongoose');
var fs = require('fs');
var csv = require('csv');

var rateRecord = mongoose.Schema({
  ITEM: String,
  COMMENT: String,
  SPACE: String,
  POS_NEG: String,
  CR: String,
  ID: Number,
  PRINT: Boolean,

  RATE1: Number,
  RATE2: Number,
  RATE3: Number,
  RATE4: Number,

  FREQUENCY: Number,
  FREQ_2: Number,
  FREQ_3: Number,
  FREQ_4: Number,
  FREQ_5: Number,
  FREQ_6: Number
});

module.exports = import_csv_data = function(app) {
  console.log("csv data");
};

var RateRecord = mongoose.model('RateRecord', rateRecord);

module.exports = RateRecord;

// function isEmpty(str) {
//     return (!str || 0 === str.length);
// }

// var parser = csv.parse();

// var columns;

// function makeObject(data) {
//   var obj = {};
//   for (var i = 0; i < data.length; i++) {
//     if (!isEmpty(data[i])) {
//       obj[columns[i]] = data[i];
//     }
//   }
//   return obj;
// }

// fs.readFile('data/krtrates.data.csv', 'utf8', function(err, contents) {
//   if (err) {
//     console.log(err);
//     return;
//   };
//   console.log('length', contents.length);
//   parser.write(contents);
// });


// parser.on('readable', function(){
//   while(data = parser.read()) {
//     if (isEmpty(columns)) {
//       columns = data;
//     }
//     obj = makeObject(data);
//     var rateRecord = new RateRecord(obj);
//     rateRecord.save(function (err, rateRecord) {
//       if (err) {
//         console.log("obj: ", obj);
//         return console.error(err)
//       };
//       console.log("saved rateRecord: ", rateRecord.ITEM);
//     });
//   }
// });

