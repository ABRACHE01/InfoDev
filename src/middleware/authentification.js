import { AuthModel } from "../models/authModel.js";

export class authMiddlewares{
    
    static async checkIfLoggedIn (req, res, next) {
        const userId = req.cookies.user_id;
        
        if(userId){
            if(await AuthModel.getAuthor(userId)){
                return next();
            }
        }
    
        res.redirect('/login');
    }
    
    static preventBackToLoginOrSignup(req, res, next) {
        const userId = req.cookies.user_id;
      
        if (userId) {
          return res.redirect('/dashboard');
        }
    
        next();
    };

}