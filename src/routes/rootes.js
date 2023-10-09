import express from 'express';
import { ArticleController } from  '../controllers/articleController.js' ;

const router = express.Router();

const articleController = new ArticleController();


router.get('/articles' , articleController.index);
router.get('/articles/:id' , articleController.show);
router.get('/article/add', (req, res) => {
    res.render('article/addArticle');
  });

router.get('/article/edite/:id', articleController.showBeforeUpdate);
router.put('/article/edite/:id', articleController.updateArticle)

router.post('/articles', articleController.submitAdd);
router.delete('/article/:id', articleController.deleteArticle);

export { router};