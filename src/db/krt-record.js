
var krtSchema = mongoose.Schema({
  name: String
});

var KrtRate = mongoose.model('KrtRate', krtSchema);


// var fluffy = new Kitten({ name: 'fluffy' });
// fluffy.save(function (err, fluffy) {
// if (err) return console.error(err);
// console.log("saved fluffy");
// });


module.exports = KrtRate;