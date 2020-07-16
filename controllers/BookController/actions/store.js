const Book = require('../../../models/Book');

async function store(req, res) {
  const {_id: userId} = req.user;
  const bookData = req.body;
  const {id: bookId} = bookData;

  const book = new Book({userId, bookId, bookData});

  const hasBook =
      await Book.find({userId}).where('bookId').equals(bookId).count();

  if (hasBook > 0) {
    res.status(400).send({errormsg: 'Book already exist'});
  } else {
    book.save()
        .then(data => {
          res.status(200).send(data);
        })
        .catch(error => {
          res.status(500).send(error);
        });
  }
}

module.exports = store;
