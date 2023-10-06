const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

// Define your routes here (controllers)
// For example:
const commentController = require('../src/controllers/commentController');
// app.use('/comments', commentController);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });