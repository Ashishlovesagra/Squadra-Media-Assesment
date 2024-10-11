const express = require('express');
const { getMovies } = require('../controllers/movieController');
const router = express.Router();


router.post('/movies', getMovies);

module.exports = router;
