import express from 'express';
import CommentController from './controllers/CommentController.js';
import bodyParser from 'body-parser';


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());

app.use(methodOverride('_method'));

// routes
app.post('/create-comment', CommentController.createComment);
app.get('/get-comments', CommentController.getComments);
app.delete('/delete-comment/:commentId', CommentController.deleteComment); 
app.put('/update-comment/:commentId', CommentController.updateComent);

import path from 'path';
import { fileURLToPath } from 'url';
import { router } from './routes/rootes.js';
import methodOverride from 'method-override';


app.use(methodOverride('_method'));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});