const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  userId: {type: String, required: true},
  alternativeCover: {type: String}
  bookData: {type: Object, required: true}
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
