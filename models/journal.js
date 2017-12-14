const mongoose = require('mongoose');

const journalSchema = mongoose.Schema({
  title: { type: String, required: true },
  entry: {type: String, required: true},
  img: { type: String, required: true },

}, {timestamps: true });

module.exports = mongoose.model('Journal', journalSchema);
