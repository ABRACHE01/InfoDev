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

router.post("/login", async(req, res) => {
    try{
        await AuthController.login(req, res)
    }catch(error){
        res.status(500).json(error)
    }
})

router.get("/login", (req, res) => {
    res.render('auth/login')
})

export default router;