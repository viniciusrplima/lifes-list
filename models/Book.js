const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  userId: {type: String, required: true},
  alternativeCover: {type: String},
  bookId: {type: String, required: true},
  bookData: {type: Map, required: true}
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
