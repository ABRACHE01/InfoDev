import express from 'express';
import { ArticleController } from '../controllers/articleController.js';
import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    cb(null, 'public/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage }); 

const router = express.Router();
const articleController = new ArticleController();

//routes here

router.get('/articles', articleController.index);
router.get('/articles/:id', articleController.show);
router.get('/article/add', (req, res) => {
  res.render('article/addArticle');
});

router.get('/article/edite/:id', articleController.showBeforeUpdate);
router.put('/article/edite/:id', articleController.updateArticle);

router.post('/articles', upload.single('photo'), articleController.submitAdd);

router.delete('/article/:id', articleController.deleteArticle);

export { router };
