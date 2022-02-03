const Movie = require('../models/movieList');

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