import { registerUser } from "../models/user.model.js";
import { SALT_ROUNDS } from "../configurations.js";
import bcrypt from 'bcrypt';

export const registerUserController = async (req, res) => {
    const {user, password, rol} = req.body;
    const passHash = await bcrypt.hashSync(password, SALT_ROUNDS);
    try {
        const results = registerUser(user, passHash, rol);
        console.log(results);
        res.json({message: "Todo salio correctamente"})
    } catch (error) {
        res.send(error)
    }
}