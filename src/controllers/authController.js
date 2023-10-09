import { AuthModel } from "../models/authModel.js";
import bcrypt from "bcrypt";

export class AuthController{
    
    static async register(req, res) {
        const { fullName, photo, email, password } = req.body;
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const author = new AuthModel(fullName, photo, email, hashedPassword);
        await author.register();
        
        res.send(author);
    }

    static async login(req, res){
        const {email, password} = req.body;

        const author = await AuthModel.login(email);

        if(author){
            if(await bcrypt.compare(password, author.password)){
                res.send(author);
            }else{
                res.send("Incorrect password")
            }
        }else{
            res.send("Email not found")
        }
    }
}