import express from 'express';
import { ArticleController } from '../controllers/articleController.js';
import upload from "../help.js"
import { authMiddlewares } from '../middleware/authentification.js';
import { AuthController } from '../controllers/authController.js';
import    { UserController }   from '../controllers/userController.js';
import CommentController from '../controllers/CommentController.js';



const router = express.Router();
const articleController = new ArticleController();
const userController = new UserController();


//Profile routes 

router.get('/user/:id', authMiddlewares.checkIfLoggedIn , userController.show);

router.get('/user/edit/:id', authMiddlewares.checkIfLoggedIn , userController.showBeforeUpdate);

router.put('/updateUser/:id' ,authMiddlewares.checkIfLoggedIn, upload.single('photo'), userController.updateUser);

router.delete('/deleteUser/:id' ,authMiddlewares.checkIfLoggedIn,userController.deleteUser);


//routes here 
router.get('/articles',authMiddlewares.checkIfLoggedIn, articleController.index);
router.get('/dashboard',authMiddlewares.checkIfLoggedIn, articleController.dashboard);
router.get('/articles/:id',authMiddlewares.checkIfLoggedIn, articleController.show);

router.get('/article/add',authMiddlewares.checkIfLoggedIn, (req, res) => {
  res.render('article/addArticle', {
    req
  });
});

router.get('/', (req, res) => {
  res.render('landing', {
    req
  });
});

router.get('/article/edite/:id', articleController.showBeforeUpdate);

router.post('/articles' ,upload.single('photo'), articleController.submitAdd);

router.put('/article/edite/:id' , upload.single('photo'), articleController.updateArticle);

router.delete('/article/:id' ,articleController.deleteArticle);

// auth routes 

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
      'error': "",
      req
  })
})

router.get("/register",authMiddlewares.preventBackToLoginOrSignup, (req, res) => {
  res.render('auth/signup', {
      'error': "",
      req
  })
})


// routes
router.post('/create-comment', CommentController.createComment);
router.get('/get-comments', CommentController.getComments);
router.delete('/delete-comment/:commentId', CommentController.deleteComment); 
router.put('/update-comment/:commentId', CommentController.updateComent);



export { router };
