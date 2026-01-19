import { registerUser, loigIn } from "../models/user.model.js";
import { SALT_ROUNDS } from "../configurations.js";
import bcrypt from 'bcrypt';

export const registerUserController = async (req, res) => {
    const {user, password, rol} = req.body;
    
    const passHash = await bcrypt.hash(password, parseInt(SALT_ROUNDS));
    try {
        const results = await registerUser(user, passHash, rol);
        console.log(results);
        
        req.session.user = {
            name: user,
            rol: rol
        };

        if (results[0][0].mensaje === "ERROR OCURRIDO"){
            res.redirect('register', {error: "Ocurrio un error"})
        }

        res.redirect('/')

    } catch (error) {
        res.send(error)
    }
}

export const logInController = async (req, res) => {
    const {user, password} = req.body;
    console.log(user, password)
    try {
        const usuario = await loigIn(user);

        console.log(usuario)

        if(!usuario[0][0]){
            return res.render('login', {error: 'Usuario no existe'})
        }

        const match = await bcrypt.compare(password, usuario[0][0].passwordHash)
        if (!match){
            return res.render('login', {error: 'Contraseña incorrecta'})
        }

        req.session.user = {
            name: usuario[0][0].usuario,
            rol: usuario[0][0].rol
        };

        res.redirect('/');
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}