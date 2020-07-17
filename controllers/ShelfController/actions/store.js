const Shelf = require('../../../models/Shelf');

async function store(req, res) {
  const {title} = req.body;
  const {_id: userId} = req.user;

  if (title === '' || title === undefined) {
    res.status(400).send('title parameter required');
    return;
  }

  const shelf = new Shelf({title, userId});
  shelf.save()
      .then(data => res.status(200).send(data))
      .catch(error => res.status(500).send(error));
}

module.exports = store;
