
import Joi from "joi";


export default class requestArticle{

    static validateInpute(req, res){

        const schima = Joi.object({
            title : Joi.string().required(), 
            content: Joi.string().required(), 
            photo:Joi.string(), 
        }).options({allowUnknown:true})
        const validationResult = schima.validate(req.body , {abortEarly: false})
        return validationResult;
    }


}


