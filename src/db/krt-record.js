var mongoose = require('mongoose');

var krtSchema = mongoose.Schema({
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


var KrtRecord = mongoose.model('KrtRecord', krtSchema);

module.exports = KrtRecord;
