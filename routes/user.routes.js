import { registerUserController, logInController } from "../controllers/user.controller.js";
import { isAuth} from "../services/AuthSession.middleware.js";
import { hasRole } from "../services/AuthRol.middleware.js";
import express from 'express'

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login',);
});

router.get('/register', isAuth, (req, res) => {
    res.render('Register',);
});

router.get('/logout', isAuth, (req,res) => {
    req.session.destroy();
    res.redirect('login');
})

router.post('/register', isAuth, registerUserController)
router.post('/login', isAuth, logInController)

export default router;