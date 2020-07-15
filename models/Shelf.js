const mongoose = require('mongoose');

const shelfSchema = new mongoose.Schema({
  title: {type: String, required: true, minlength: 3, maxlength: 25},
  userId: {type: String, required: true},
  books: {type: [String], required: true}
});

const Shelf = mongoose.model('Shelf', shelfSchema);

module.exports = Shelf;
