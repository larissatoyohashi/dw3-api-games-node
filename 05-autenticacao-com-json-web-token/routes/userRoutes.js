import express from "express"
const userRoutes = express();
import userController from "../controllers/userController.js";


// Rota para CADASTRAR o usuário

userRoutes.post("/user", userController.createUser);

export default userRoutes;