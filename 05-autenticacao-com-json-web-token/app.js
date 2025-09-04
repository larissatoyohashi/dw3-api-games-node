import express from "express";
import mongoose from "mongoose";
import Game from "./models/Games.js";
import User from "./models/Users.js";

// Importando as rotas de Games
import gameRoutes from "./routes/gameRoutes.js";

// Importando as rotas de Usuários
import userRoutes from  "./routes/userRoutes.js";

const app = express();



// Configurações do Express
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use('/', gameRoutes);
app.use('/', userRoutes);



// Iniciando a Conexão com o Banco de Dados no MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api");


// Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error)=>{
    if(error){
        console.log(error);
    } 
    console.log(`API rodando em http://localhost:${port}.`);
    });
