import Movie from "../models/Movies.js"

class movieService{
    async getAll(){
        try {
            const movies = await Movie.find();
            return movies;
        } catch(error){
            console.log(error);
        }
    }


    async Create(title, year, genre, director){
       try{
        const newMovie = new Movie({
        title,
        year,
        genre,
        director
        })
        await newMovie.save()
        } catch(error){
            console.log(error)
        }
    }
}

export default new movieService();