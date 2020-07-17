const User = require('../../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function signin(req, res) {
  const {username, password} = req.body;
  const user = await User.findOne({username});

  if (user === null) {
    res.status(400).send(Error('Username does not exist!'));
    return;
  }

  if (!bcrypt.compareSync(password, user.password)) {
    res.status(400).send(Error('Error in password'));
    return;
  }

  const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);

  res.header('Authorization-Token', token);
  res.status(200).send('User logged');
}

function Error(msg) {
  return {
    errormsg: msg
  }
}

module.exports = signin;
