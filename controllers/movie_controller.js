const db = require('../config/mongoose');

const Movie = require('../models/movieList');


module.exports.create = function (req, res) {

    Movie.create({
        name: req.body.name,
        actor: req.body.actor,
        actress: req.body.actress,
        director: req.body.director,
        year: req.body.year

    }, function (err, newMovie) {
        if (err) {
            console.log('error in creating a movie');
            return;
        }
        return res.redirect('back');
    });

}


module.exports.movies = function(req, res){

    Movie.findById(req.params.id, function(err, movie){
        return res.render('editMovie', {
            title: 'edit movie',
            movie_data : movie
        });
    });

}


module.exports.deleteSingle = function(req, res){

    let id = req.query.id;

    Movie.findByIdAndDelete(id, function (err) {

        if (err) {
            console.log('error in deleting single an object from db');
            return;
        }
        return res.redirect('back');
    });
}


module.exports.update = function(req, res){
    
    Movie.findByIdAndUpdate(req.params.id, req.body, function(err, user){

        if(err){
            console.log('error in updating the task ', err);
            return res.redirect('back');
        }
         return res.redirect('back');
    });
    
}






