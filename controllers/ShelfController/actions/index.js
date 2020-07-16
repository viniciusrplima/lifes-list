const Shelf = require('../../../models/Shelf');

async function index(req, res) {
  const {limit, page} = req.query;
  const {_id: userId} = req.user;

  const limitInt = parseInt(limit);
  const pageInt = parseInt(page) - 1;

  if (pageInt < 0) res.status(400).send('Page index start in 1');

  const shelves = await Shelf.find()
                      .where('userId')
                      .equals(userId)
                      .skip(limitInt * pageInt)
                      .limit(limitInt)
                      .catch(error => res.status(500).send(error));

  res.send(shelves);
}

module.exports = index;
