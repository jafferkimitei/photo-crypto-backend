// models/Photo.js
const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  price: { type: Number, required: true },
  dateAdded: { type: Date, default: Date.now },
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
