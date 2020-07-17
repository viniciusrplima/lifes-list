const express = require('express');
const router = express.Router();
const UserController = require('./controllers/UserController');
const SearchController = require('./controllers/SearchController');
const BookController = require('./controllers/BookController');
const ShelfController = require('./controllers/ShelfController');

const {auth} = UserController;

router.get('/search', auth, SearchController.search);

router.get('/book', auth, BookController.index);
router.post('/book', auth, BookController.store);
router.delete('/book/:id', auth, BookController.remove);

router.get('/shelf', auth, ShelfController.index);
router.post('/shelf', auth, ShelfController.store);
router.put('/shelf/:id', auth, ShelfController.update);
router.delete('/shelf/:id', auth, ShelfController.remove);
router.post('/shelf/:id/', auth, ShelfController.placebook);
router.delete('/shelf/:id/:bookId', auth, ShelfController.removebook);

router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);
router.put('/user/edit', auth, UserController.edit);

module.exports = router;
