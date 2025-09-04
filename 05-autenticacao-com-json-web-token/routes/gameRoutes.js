import express from "express";
const gameRoutes = express.Router();
import gameController from "../controllers/gameController.js";

// A camada de routes será responsável por conter os ENDPOINTS da API
gameRoutes.get("/games", gameController.getAllgames);

// ENDPOINT para CADASTRAR
gameRoutes.post("/games", gameController.createGame)

// ENDPOINT para DELETAR
gameRoutes.delete("/games/:id", gameController.deleteGame);

// ENDPOINT para EDITAR
gameRoutes.put("/games/:id", gameController.updateGame);

// ENDPOINT para IMPRIMIR um jogo
gameRoutes.get("/games/:id", gameController.getOneGame);

export default gameRoutes;