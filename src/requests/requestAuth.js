import Joi from "joi";


export default class requestAuth{

    static validateRegister(req, res){
        
        const schema = Joi.object({
            fullName : Joi.string().required(), 
            email : Joi.string().email().required(), 
            photo: Joi.string(),
            password : Joi.string().min(8).regex(/^(?=.*[a-zA-Z])(?=.*\d)/).required(),
        }).options({allowUnknown:true})

        const validationResult = schema.validate(req.body , {abortEarly: false})
        
        return validationResult;
    }

    static validateLogin(req, res){
        
        const schema = Joi.object({
            email : Joi.string().email().required(), 
            password : Joi.string().min(8).regex(/^(?=.*[a-zA-Z])(?=.*\d)/).required(),
        }).options({allowUnknown:true})

        const validationResult = schema.validate(req.body , {abortEarly: false})
        
        return validationResult;
    }
}