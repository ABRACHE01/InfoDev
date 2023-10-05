const express = require('express');
const commentRoutes = require('./routes/commentRoutes');

const app = express();

app.use(express.json());

app.use(commentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});