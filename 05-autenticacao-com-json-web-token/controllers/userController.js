import userService from "../services/userService.js";

// Função para CADASTRAR um usuário

const createUser = async (requestAnimationFrame,res) =>{
    try {

        // Coletando os dados do corpo na requisição

        const {name, email, password } = req.body;
        await userService.Create(name, email, password);
        req.status(201).json({success : "Usuário cadastrado com sucesso"})
    } catch(error){
        console.log(error)
        res.sendStatus(500)
    }
};

export default {createUser};