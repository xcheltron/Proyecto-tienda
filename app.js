import express from 'express';
import  {PORT}  from './configurations.js';

const app = express();

app.get('/', (req, res) =>{
    res.send("Hola mundo")
})

app.listen(PORT, () =>{
    console.log("Servidor abierto")
})