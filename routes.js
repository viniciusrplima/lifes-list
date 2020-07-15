const express = require('express');
const router = express.Router();
const UserController = require('./controllers/UserController');

router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);
router.post('/auth', UserController.auth);

module.exports = router;
