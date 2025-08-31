import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema ({

    title : String,
    year : Number,
    genre : String,
    director: String
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;