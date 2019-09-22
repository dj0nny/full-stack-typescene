var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  releaseYear: String,
  playbillUrl: String,
});

const Movie = module.exports = mongoose.model('Movie', movieSchema);