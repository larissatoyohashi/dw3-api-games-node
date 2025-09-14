import mongoose from "mongoose";

const dbUser = "dbUser"
const dbPassword = "8EyEgtX7hLch3zq"

const connect = () => {
    mongoose.connect (
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.j7qfmym.mongodb.net/api-themovies?retryWrites=true&w=majority&appName=Cluster0`
    );

const connection = mongoose.connection;
connection.on("error", () => {
    console.log("Erro ao conectar com o mongoDB");
});
connection.on("open", () => {
    console.log("Conectando ao mongoDBcom sucesso!")
});
};

connect();

export default mongoose;


