import express from 'express';
import mongoose from 'mongoose';

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
mongoose.connect('mongodb://localhost')
app.listener(PORT,() =>{
    console.log(`El servidor esta funcionado en el puerto${PORT} `);
});