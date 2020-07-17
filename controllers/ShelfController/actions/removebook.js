const Shelf = require('../../../models/Shelf');

async function removebook(req, res) {
  const {_id: userId} = req.user;
  const {id: shelfId, bookId} = req.params;

  const {books} = await Shelf.findOne()
                      .where('userId')
                      .equals(userId)
                      .where('_id')
                      .equals(shelfId)
                      .catch(error => res.status(500).send(error));

  if (!books.includes(bookId)) {
    res.status(400).send('Book not in shelf');
    return;
  }

  const newBooks = books.filter(book => book !== bookId);

  const result = await Shelf.update({books: newBooks})
                     .where('userId')
                     .equals(userId)
                     .where('_id')
                     .equals(shelfId)
                     .catch(error => res.status(500).send(error));

  res.status(200).send('Book removed of shelf');
}

module.exports = removebook;
