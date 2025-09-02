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
    async Update(title, year, genre, pataforma, price){
      try{
        await Game.findByIdAndUpdate(id,{
          title,
          year,
          genre, 
          plataforma,
          price,
        });

        console.log("Dados do game alterado com sucesso.");
      }
      catch(error){
        console.log(error)
      }
    }

  // Método para cadastro do jogo
  async Create(title, year, genre, plataforma, price) {
    try {
      const newGame = new Game({
        title,
        year,
        genre,
        plataforma,
        price,
      });
        await newGame.save();
        
    } catch (error) {
      console.log(error);
    }
  }
}

export default new gamesService();
