const express = require('express');
const router = express.Router();
const UserController = require('./controllers/UserController');
const BookController = require('./controllers/BookController');

const {auth} = UserController;

router.get('/search', auth, BookController.search);

router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);

module.exports = router;
