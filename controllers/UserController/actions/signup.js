const bcrypt = require('bcrypt');
const User = require('../../../models/User');

async function signup(req, res) {
  pickBody(req, res)
      .then(validateUsername)
      .then(validatePassword)
      .then(hashPassword)
      .then(saveUser)
      .catch(error => {
        console.log(error);
        res.status(500).send(Error('Internal Error'));
      });
}

async function pickBody(req, res) {
  return {
    user: new User(req.body), res
  }
}

async function validateUsername(payload) {
  const {res} = payload;
  const {username} = payload.user;

  if (username.length < 3) res.status(400).send(Error('Username too short'));

  if (username.length > 100) res.status(400).send(Error('Username too long'));

  const hasUser = await User.find({username});
  if (hasUser.length > 0)
    res.status(400).send(Error('Username already exists'));

  return payload
}

async function validatePassword(payload) {
  const {res} = payload;
  const {password} = payload.user;

  if (password.length < 3) res.status(400).send(Error('Password too small'));

  if (password.length > 100) res.status(400).send(Error('Password too large'));

  return payload;
}

async function hashPassword(payload) {
  const {password} = payload.user;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  payload.user.password = hash;

  return payload;
}

async function saveUser(payload) {
  const {user, res} = payload;

  user.save()
      .then(data => {res.status(200).send({msg: 'OK', data})})
      .catch(
          error => res.status(500).send(
              {errormsg: 'Unable to save user', data: error}));

  return payload;
}

function Error(msg) {
  return {
    errormsg: msg
  }
}

module.exports = signup
