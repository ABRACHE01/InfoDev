import { AuthModel } from "../models/authModel.js";
import bcrypt from "bcrypt";

export class AuthController{
    
    static async register(req, res) {
        const { fullName, photo, email, password } = req.body;
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const author = new AuthModel(fullName, photo, email, hashedPassword);
        await author.register();
        
        res.send(author)
    }
}