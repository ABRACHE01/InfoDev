import express from 'express';
import commentController from '../src/controllers/commentController.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Define your routes here
app.post('/create-comment', commentController.createComment);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
