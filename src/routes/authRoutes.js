import express from 'express';
import { AuthController } from '../controllers/authController.js';
import upload from '../help.js';
import { authMiddlewares } from '../middleware/authentification.js';

const router = express.Router();

router.post("/register", upload.single('photo'), async(req, res) => {
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

router.get('/logout', async(req, res) => {
    try {
        await AuthController.logout(req, res);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/login", authMiddlewares.preventBackToLoginOrSignup ,(req, res) => {
    res.render('auth/login', {
        'error': ""
    })
})

router.get("/register",authMiddlewares.preventBackToLoginOrSignup, (req, res) => {
    res.render('auth/signup', {
        'error': ""
    })
})

router.get("/home", authMiddlewares.checkIfLoggedIn, (req, res)=>{
    res.render('home')
})
export default router;