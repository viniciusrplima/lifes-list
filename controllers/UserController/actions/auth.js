const User = require('../../../models/User');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('Authorization-Token');
  if (!token) res.status(401).send('Access denied');

  try {
    const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = userVerified;
    next();
  } catch (error) {
    res.status(401).send('Access denied');
  }
}

module.exports = auth;
