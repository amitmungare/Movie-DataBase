// require express for setting up the express server
const express = require('express');

// setting up the Router 
const router = express.Router();

// Setting path for controller function
const homeController = require('../controllers/home_controller');

// Setting controller function to a route
router.get('/', homeController.home);

// Route all requests starting with '/movies' to movies.js file
router.use('/movies', require('./movies'));

// exporting the router
module.exports = router;