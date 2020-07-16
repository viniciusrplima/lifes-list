const express = require('express');
const router = express.Router();
const UserController = require('./controllers/UserController');
const SearchController = require('./controllers/SearchController');
const BookController = require('./controllers/BookController');

const {auth} = UserController;

router.get('/search', auth, SearchController.search);

router.get('/book', auth, BookController.index);
router.post('/book', auth, BookController.store);

router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);

module.exports = router;
