import User from "../models/Users.js";

class userService{

   async Create(name, email ,password) {
    try {
      const newGame = new User({
        name,
        email,
        password, 
      });
        await newUser.save();
        
    } catch (error) {
      console.log(error);
    }
  } 

}

export default new userService();
