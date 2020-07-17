const Shelf = require('../../../models/Shelf');

async function update(req, res) {
  const {_id: userId} = req.user;
  const {id: shelfId} = req.params;
  const {title} = req.body;

  const result =
      await Shelf.updateOne({title})
          .where('userId')
          .equals(userId)
          .where('_id')
          .equals(shelfId)
          .catch(error => res.status(400).send('Shelf don\'t exist'));

  res.status(200).send('Shelf updated');
}

module.exports = update;
