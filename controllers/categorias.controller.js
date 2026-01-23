import { Insertar_Categoria } from "../models/categoria.model";

export const Insertar_Categoria_Controller = async (req, res) =>{
    const {nombre} = req.body;
    try {
        const categoria = await Insertar_Categoria(nombre);
        console.log(categoria);
        res.Json(categoria);
    } catch (error) {
        console.error(error);
    }
}