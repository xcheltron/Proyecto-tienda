import { registerUserController, logInController } from "../controllers/user.controller.js";
import { isAuth} from "../services/AuthSession.middleware.js";
import { hasRole } from "../services/AuthRol.middleware.js";
import express from 'express'

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login',);
});

router.get('/register', (req, res) => {
    res.render('Register',);
});

router.post('/register', registerUserController)
router.post('/login', logInController)

export default router;