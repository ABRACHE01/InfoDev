import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import layouteEjs from "express-ejs-layouts";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cookieParser());

app.use(express.urlencoded());

app.set('views', path.join(__dirname, 'views'));
app.use(layouteEjs)

app.set('view engine', 'ejs');

app.use('/', authRoutes);

app.listen(3000, () => {
    console.log("Server is ready on port 3000");
})
