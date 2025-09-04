// Importando o model para o Service
import Game from "../models/Games.js";

// O service será responsável por conter os métodos de manipulação do banco

// Classe que irá conter os métodos
class gamesService {
  // Método getAll -> Buscando os registros do Banco
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }

  // Deletando registros do banco
  async Delete(id) {
      try{
        await Game.findByIdAndDelete(id);
        console.log(`Game com a id ${id} deletado com sucesso.`);
      }catch(error){
        console.log(error)
      }
    }

  // Método para alterar cadastro do jogo
    async Update(title, year, price, description){
      try{
        await Game.findByIdAndUpdate(id,{
          title,
          year,
          price, 
          description
        });

        console.log(`Dados do game com o id ${id} alterados com sucesso`);
        return game
      }
      catch(error){
        console.log(error)
      }
    }

  // Método para cadastro do jogo
  async Create(title, year,price, description) {
    try {
      const newGame = new Game({
        title,
        year,
        price, 
        description
      });
        await newGame.save();
        
    } catch (error) {
      console.log(error);
    }
  }

  // Listando um registro único
  async getOne(id) {
    try{
       const game = await Game.findOne({_id : id})
       return game
    } catch(error){
      console.log(error)
    }
  }


}



export default new gamesService();
