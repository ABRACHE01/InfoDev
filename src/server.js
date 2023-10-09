import express from 'express';
import CommentController from './controllers/CommentController.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// routes
app.post('/create-comment', CommentController.createComment);
app.get('/get-comments', CommentController.getComments);
app.delete('/delete-comment/:commentId', CommentController.deleteComment); 
app.put('/comments/:commentId', CommentController.updateComent);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
