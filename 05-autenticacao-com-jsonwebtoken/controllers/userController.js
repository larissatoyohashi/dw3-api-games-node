// Importando o service
import userService from "../services/userService.js";
// Importando o JWT
import jwt from 'jsonwebtoken'
// Segredo para o token (é recomendado que o segreja esteja nas variáveis de ambiente)
const JWTSecret = 'apithegames'

// Função para CADASTRAR um Usuário
const createUser = async (req, res) => {
  try {
    // Coletando os dados do corpo da requisição
    const { name, email, password } = req.body;
    await userService.Create(name, email, password);
    res.status(201).json({ success: "Usuário cadastrado com sucesso!" }); // Cod. 201: CREATED
  } catch (error) {
    console.log(error);
    res.sendStatus(500); // Erro interno do servidor
  }
};

// Função para realizar LOGIN
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.getOne(email);
    if (user != undefined) {
      // Fazend a validação da senha
      if(user.password == password){
        // Gerando o token com JWT
        jwt.sign({id: user.id, email: user.email}, JWTSecret, {expiresIn: '48h'},(error, token) => {
          if(error){
            res.status(400).json({error:'Não foi possível gerar o Token de Autenticação'})
          } else {
            res.status(200).json({token})
          }
        })
      } else {
        // Caso a senha esteja incorreta
          res.stauts(401).json({error:'Credenciais inválidas.'})
        // 401 -> Unauthorized
      }
    } else {
      res.status(404).json({ error: "Usuário não encontrado. " });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default { createUser, loginUser, JWTSecret };
