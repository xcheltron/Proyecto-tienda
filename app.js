import express from 'express';
import {PORT} from './configurations.js'
import db from './db/db.js'

const app = express();

//cargar las vistas
app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(express.json());

app.get('/', (req, res) => {
  res.render('Register');
});

app.listen(PORT, () => {
  console.log(`Servidor iniciando en el puerto: ${PORT}`);
});
