const express = require('express');

const router = express.Router();

const moviesController = require('../controllers/movie_controller');

router.use(express.urlencoded({extended: true }));

router.post('/create-movie', moviesController.create);

// router.post('/delete-movie', moviesController.delete);

router.get('/delete-movie-single/', moviesController.deleteSingle);

router.get('/movieData/:id', moviesController.movies);

router.post('/update/:id', moviesController.update);

module.exports = router;