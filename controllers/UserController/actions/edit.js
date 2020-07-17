const User = require('../../../models/User');
const bcrypt = require('bcrypt');

async function edit(req, res) {
  const {_id: userId} = req.user;
  const {name, password} = req.body;

  let updateBody = {}

  if (name !== undefined && name !== '') {
    updateBody.name = name;
  }

  if (password !== undefined && password !== '') {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    updateBody.password = hash;
  }

  const result = await User.updateOne(updateBody)
                     .where('_id')
                     .equals(userId)
                     .catch(error => res.status(500).send(error));

  return res.send('User modified');
}

module.exports = edit;
