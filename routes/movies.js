// require express for setting up the express server
const express = require('express');
// setting up the Router 
const router = express.Router();
// requiring the movie controller 
const moviesController = require('../controllers/movie_controller');

// Middleware to decode data coming from browser
router.use(express.urlencoded({extended: true }));

// this will handle the requests coming to /movies/create-movie and execute create function from movie_controller.js
router.post('/create-movie', moviesController.create);

// this will handle the requests coming to /movies/delete-movie-single and execute create function from movie_controller.js
router.get('/delete-movie-single/', moviesController.deleteSingle);

// this will handle the requests coming to /movies/movieData and execute create function from movie_controller.js
router.get('/movieData/:id', moviesController.movies);

// this will handle the requests coming to /movies/update and execute create function from movie_controller.js
router.post('/update/:id', moviesController.update);

// exporting the router
module.exports = router;