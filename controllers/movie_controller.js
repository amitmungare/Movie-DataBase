// importing the DataBase
const db = require('../config/mongoose');

// importng the Schema For movielist
const Movie = require('../models/movieList');

// creating Tasks
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

// passing data 
module.exports.movies = function(req, res){

    Movie.findById(req.params.id, function(err, movie){
        return res.render('editMovie', {
            title: 'edit movie',
            movie_data : movie
        });
    });

}

// deleting movie data
module.exports.deleteSingle = function(req, res){

    let id = req.query.id;

    // finding and deleting tasks from the DB
    Movie.findByIdAndDelete(id, function (err) {

        if (err) {
            console.log('error in deleting single an object from db');
            return;
        }
        return res.redirect('back');
    });
}

// updating movies database 
module.exports.update = function(req, res){
    
    Movie.findByIdAndUpdate(req.params.id, req.body, function(err, user){

        if(err){
            console.log('error in updating the task ', err);
            return res.redirect('back');
        }
         return res.redirect('back');
    });
    
}






