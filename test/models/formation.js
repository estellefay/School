const mongoose = require('mongoose');

const formationSchema = mongoose.Schema({
  name: { type: String, required: true },
  level: { type: Number, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Formation', formationSchema);
