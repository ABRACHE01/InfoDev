import express from 'express';
const app = express();

import authRoutes from './routes/authRoutes.js';

app.use(express.json());

app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log("Server is ready on port 3000");
})
