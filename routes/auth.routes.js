import { registerUserController } from "../controllers/user.controller.js";
import { isAuth} from "../services/AuthSession.middleware.js";
import { hasRole } from "../services/AuthRol.middleware.js";
import express from 'express'

const router = express.Router();


router.get('/home', isAuth, (req, res) => {
    res.render('homepage', {
        user: req.session.user
    });
});

router.get('/admin', isAuth, hasRole('Admin'), (req, res) => {
    res.render('admin', {
        user: req.session.user
    });
});

export default router