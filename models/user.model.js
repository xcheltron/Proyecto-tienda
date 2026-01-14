//Todos los modelos de la base de datos relacionados con el usario
//Registrar
//Modificar
//Eliminar
//Dar inicio de sesion
import connection from '../db/db.js';

export const registerUser = (user, passwordHash, rol) =>{
    return new Promise ((resolve, reject) =>{
        connection.query('CALL Insertar_Usuario (?,?,?)',[user, passwordHash, rol], (err, results) =>{
            if (err) reject(err)
                else resolve(results)
        })
    })
}

export const loigIn = (user, passwordHash) =>{
    return new Promise ((resolve, reject) =>{
        connection.query('CALL Inicio_Sesion(?,?)',[user, passwordHash], (err, results) =>{
            if (err) reject(err)
                else resolve(results)
        })
    })
}