import express from "express"
const movieRoutes = express();

import movieController from "../controllers/movieController.js";

// Endpoint para listar todos os filmes

movieRoutes.get("/movies", movieController.getAllMovies)

movieRoutes.post("/movie", movieController.createMovie);

export default movieRoutes