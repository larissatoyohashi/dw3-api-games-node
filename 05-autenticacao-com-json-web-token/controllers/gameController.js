import gameService from "../services/gameService.js"
import {ObjectId} from "mongodb";


const getAllgames = async(req,res) => {
    try {

        const games = await gameService.getAll()
        res.status(200).json({games:games});
        // Código 200 -> Ok

    } catch(error) {
        console.log(error);
        res.status(500).json({error: 'Erro interno do Servidor.'});
    }
}

// Função para CADASTRAR jogos

const createGame = async(req,res) => {
    try {
         const {title, year, price, description} = req.body;
         await gameService.Create(title, year,price, description)
         res.sendStatus(201) // Código 201 -> Recurso criado com sucesso
    } catch(error){
        console.log(error)
        res.status(500).json({error: 'Erro interno do Servidor.'});
    }
}

// Função para ATUALIZAR jogos

const updateGame = async(req,res) => {
 try{
    if(ObjectId.isValid(req.params.id)){
      const id = req.params.id
      const {title, year, price, description} = req.body
      
      const game = await gameService.Update(id, title, year,price, description)
      res.sendStatus(200).json({game}) // Código 200 - OK
    }else{
      res.sendStatus(400); // Código 400 (BAD REQUEST)
    }

  }catch(error){
    console.log(error);
    res.status(500).json({error: "Erro interno do servidor."})
  }
}

// Função para BUSCAR um único jogo

const getOneGame = async (req,res) => {
    try{
        if (ObjectId.isValid(req.params.id)){
            const id = req.params.id;
            const game = await gameService.getOne(id);
            if(!game){
                res.status(404).json({error : 'O jogo não foi encontrado.'})
                // O jogo não foi encontrado
            } else {
                res.status(200).json({game})
            }
            
        }  else {
                res.status(400).json({error : "A ID enviada é inválida"})
            }

    } catch(error){
        console.log(error)
        res.gameStatus(500)
    }
}


// Função para DELETAR JOGOS
const deleteGame = async(req,res) => {
    try{
         if (ObjectId.isValid(req.params.id)){
             await gameService.Delete(id)
            res.sendStatus(204) // Código 204 -> No content para retornar
         } else {
            res.status(400).json({error: "A id enviada é inválida"});
            // Código 400 -> Bad request
         } 
    } catch(error){
        res.status(500).json({error: "Erro interno do sevidor."});
    }
}

export default {getAllgames, createGame, deleteGame, getOneGame, updateGame};