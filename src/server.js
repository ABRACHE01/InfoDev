import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import  {router}  from './routes/userRouts.js';
import methodOverride from 'method-override';
import layouteEjs from "express-ejs-layouts";

const app = express();
const port = 3301;

app.use(methodOverride('_method'));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('src'))
app.use(layouteEjs)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', router);
 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});