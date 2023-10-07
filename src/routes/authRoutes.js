import express from 'express';
import { AuthController } from '../controllers/authController.js';

const router = express.Router();

router.post("/register", async(req, res) => {
    try{
        await AuthController.register(req, res)
    }catch(error){
        res.status(500).json(error)
    }
});

export default router;