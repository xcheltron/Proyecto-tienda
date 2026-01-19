import express from 'express'

const router = express.Router();

router.get('/', (req, res) =>{
    res.render('productoshome')
})


router.get('/categoria', (req, res) =>{
    res.render('Categoria')
})

export default router