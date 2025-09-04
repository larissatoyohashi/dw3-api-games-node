import mongoose from "mongoose";

// Criando os documentos aninhado
// Primeiro cria o que será aninhado

const descriptionSchema = new mongoose.Schema({
    genre: String,
    plataform : String,
    rating : String
})

const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number,
    descriptions : descriptionSchema
});

// Cria Schema, chama o model e define os parâmetros
const Game = mongoose.model('Game', gameSchema);

export default Game;

// O nome da coleção sempre pluraliza no MongoDB; Game -> Games