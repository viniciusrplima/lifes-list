const Shelf = require('../../../models/Shelf');
const Book = require('../../../models/Book');

async function placebook(req, res) {
  const {_id: userId} = req.user;
  const {id: shelfId} = req.params;
  const {bookId} = req.body;

  const hasBook = await Book.find()
                      .where('userId')
                      .equals(userId)
                      .where('bookId')
                      .equals(bookId)
                      .count();

  if (hasBook === 0) {
    res.status(400).send('Book does not exist');
    return;
  }

  const {books} =
      await Shelf.findOne()
          .where('userId')
          .equals(userId)
          .where('_id')
          .equals(shelfId)
          .catch(error => res.status(400).send('Shelf does not exist'));

  if (books.includes(bookId)) {
    res.status(400).send('Book already in shelf');
    return;
  }

  const newBooks = [...books, bookId];

  const result = await Shelf.updateOne({books: newBooks})
                     .where('userId')
                     .equals(userId)
                     .where('_id')
                     .equals(shelfId)
                     .catch(error => res.status(500).send(error));

  res.send(result);
}

module.exports = placebook;
