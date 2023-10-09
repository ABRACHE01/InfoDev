import express from 'express';
import { ArticleController } from '../controllers/articleController.js';
const multer = require('multer'); // Import multer here

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the destination folder where the uploaded files will be stored
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Rename the uploaded file (customize this as needed)
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage }); // Create multer upload middleware

const router = express.Router();
const articleController = new ArticleController();

// Define your routes here

router.get('/articles', articleController.index);
router.get('/articles/:id', articleController.show);
router.get('/article/add', (req, res) => {
  res.render('article/addArticle');
});

router.get('/article/edite/:id', articleController.showBeforeUpdate);
router.put('/article/edite/:id', articleController.updateArticle);

// Add the "upload" middleware to your route to handle file uploads
router.post('/articles', upload.single('photo'), articleController.submitAdd);

router.delete('/article/:id', articleController.deleteArticle);

export { router };
