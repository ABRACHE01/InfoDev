import { AuthModel } from "../models/authModel.js";
import bcryptjs from "bcryptjs";
import validation from "../requests/requestAuth.js"

export class AuthController{
    
    static async register(req, res) {
        const validate = validation.validateRegister(req);
        
        if(validate.error){
            return res.status(400).render("auth/register", {
                'error': "double check on your inputs!",
                req
            })
        }

        const { fullName, email, password } = req.body;
        
        const hashedPassword = await bcryptjs.hash(password, 10);
        
        const photo = req.file ? req.file.filename : null;

        const author = new AuthModel(fullName, photo, email, hashedPassword);
        
        if(await author.register()){
            res.render("auth/login", {
                'error': "",
                req
            })
        }
    }

    static async login(req, res){
        const validate = validation.validateLogin(req);
        
        if(validate.error){
            return res.status(400).render("auth/login", {
                'error': "double check on your inputs!",
                req
            })
        }

        const {email, password} = req.body;

        const author = await AuthModel.login(email);

        if(author){
            if(await bcryptjs.compare(password, author.password)){
                res.cookie('user_id', author.id);
                res.redirect('/dashboard');
            }else{
                res.status(400).render("auth/login", {
                    'error': "Incorrect password",
                    req
                })
            }
        }else{
            res.status(400).render("auth/login", {
                'error': "Email not found",
                req
            })
        }
    }

    static async logout(req, res){
        if(req.cookies.user_id){
            res.clearCookie('user_id')
            res.redirect('/login');
        }
    }
}