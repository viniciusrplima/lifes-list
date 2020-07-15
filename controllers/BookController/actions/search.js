const Book = require('../../../models/Book');
const axios = require('axios');

const googleBooksApi = 'https://www.googleapis.com/books/v1/volumes';

async function search(req, res) {
  const {q, limit, page, orderBy} = req.query;

  axios
      .get(googleBooksApi, {
        params: {
          q,
          maxResults: limit | 10,
          startIndex: (limit * page) | 0,
          orderBy
        }
      })
      .then(({data}) => {
        res.status(200).send(data);
      })
      .catch(error => {
        res.status(500).send(error);
      })
}

module.exports = search;
