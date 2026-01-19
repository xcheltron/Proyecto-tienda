import express from 'express';
import session from 'express-session';
import {PORT} from './configurations.js'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
import productsRoutes from './routes/products.routes.js'
import db from './db/db.js'

const app = express();

//cargar las vistas
app.set('view engine', 'ejs');

app.use(session({
  secret: 'mi_secreto_super_seguro',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // true solo si usas HTTPS
  }
}));

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/users', userRoutes)
app.use('/products', productsRoutes)
app.use('/', authRoutes)

app.listen(PORT, () => {
  console.log(`Servidor iniciando en el puerto: ${PORT}`);
});
