import express from 'express'

const router = express.Router();

router.get('/', (req, res) =>{
    res.render('productoshome')
})


router.get('/categoria', (req, res) =>{
    res.render('Categoria')
})

router.get('/agregar', (req, res) =>{
    res.render('Productos')
})

router.get('/consultar', (req, res) =>{
    res.render('productos_cons')
})

router.get('/categorias', (req, res) =>{
    res.render('Categoria')
})

export default router