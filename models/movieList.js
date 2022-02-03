// import mongoose 
const mongoose = require('mongoose');

// this is the DataBase schema
const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    actor:{
        type: String,
        required: true
    },
    actress:{
        type: String,
        required: true
    },
    director:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    }
});

const Movie = mongoose.model('movieList', movieSchema);

module.exports = Movie;