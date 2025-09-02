import movieService from "../services/movieService.js"

const getAllMovies = async(req,res) => {
    try {
        const movies = await movieService.getAll();
        res.status(200).json({ movies : movies});
    } catch(error){
        console.log(error)
        res.status(500).json({error: "Erro interno do servidor."})
    }
}

// Cadastrando um filme

const createMovie = async (req,res) => {
    try {
        const {title, year, genre, director} = req.body;
        await movieService.Create(title, year, genre, director);
        res.sendStatus(201);
    } catch(error){
        res.status(500).json({error:"Erro interno do servidor"});
    }
}


export default {getAllMovies, createMovie};