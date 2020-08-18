import express from 'express';
import cors from 'cors'
import main from './routes/main.js';
import req from './routes/req.js';
import path from 'path';
import dotenv from 'dotenv';
import database from './configs/database.js';



dotenv.config();

const app = express();


//Middlewares
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));



// Routes
app.use('/', main);
app.use('/api', req);







const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Server running on ' + PORT);
})