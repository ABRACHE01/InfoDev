import express from 'express';
import { ArticleController } from '../controllers/articleController.js';
import upload from "../help.js"

const router = express.Router();
const articleController = new ArticleController();

//routes here 

router.get('/articles', articleController.index);
router.get('/articles/:id', articleController.show);
router.get('/article/add', (req, res) => {
  res.render('article/addArticle');
});

router.get('/article/edite/:id', articleController.showBeforeUpdate);

router.post('/articles' ,upload.single('photo'), articleController.submitAdd);

router.put('/article/edite/:id' , upload.single('photo'), articleController.updateArticle);

router.delete('/article/:id' ,articleController.deleteArticle);

export { router };
