const Book = require('../../../models/Book');

async function remove(req, res) {
  const {_id: userId} = req.user;
  const {id: bookId} = req.params;

  const result = await Book.deleteOne()
                     .where('userId')
                     .equals(userId)
                     .where('bookId')
                     .equals(bookId);

  if (!result.deletedCount)
    res.status(400).send('Book don\'t exist');
  else
    res.status(200).send(result);
}

module.exports = remove;
