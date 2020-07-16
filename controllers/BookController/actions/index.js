const Book = require('../../../models/Book');

async function index(req, res) {
  const {_id: userId} = req.user;
  const {limit, page} = req.query;

  const numOfBooks = await Book.find({userId}).count();
  const books = await Book.find({userId})
                    .skip((limit * page) | 0)
                    .limit(limit | 10)
                    .sort('bookData.volumeInfo.title');

  res.send({numOfBooks, books});
}

module.exports = index;
