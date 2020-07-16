const Shelf = require('../../../models/Shelf');

async function remove(req, res) {
  const {_id: userId} = req.user;
  const {id: shelfId} = req.params;

  const result = await Shelf.deleteOne()
                     .where('userId')
                     .equals(userId)
                     .where('_id')
                     .equals(shelfId)
                     .catch(error => res.status(500).send(error));

  if (result.deletedCount === 0) res.status(400).send('Shelf don\'t exist');

  res.status(200).send('Shelf successful removed');
}

module.exports = remove;
