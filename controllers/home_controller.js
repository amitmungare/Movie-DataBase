// import database model
const Movie = require('../models/movieList');

// controller function for route '/'
module.exports.home = function(req, res){

    Movie.find({}, function (err, movielist) {
        if (err) {
            console.log('error in fetching movielist from db');
            return;
        }

        return res.render('home', {
            title: "my movieList",
            movie_list: movielist
        });

    });


}