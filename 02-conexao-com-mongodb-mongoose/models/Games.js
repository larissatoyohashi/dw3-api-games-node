import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    title: String,
    plataform: String,
    genre: String,
    year: Number,
    price: Number
});

// Cria Schema, chama o model e define os parâmetros
const Game = mongoose.model('Game', gameSchema);

export default Game;

// O nome da coleção sempre pluraliza no MongoDB; Game -> Games