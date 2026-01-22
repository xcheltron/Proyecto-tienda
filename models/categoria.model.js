import connection from "../db/db.js";

export const Insertar_Categoria = (nombre) =>{
return new Promise ((resolve, reject) => {
    connection.query("CALL Insertar_Categoria(?)", [nombre], (results, err) =>{
        if (err) reject(err);
            else resolve(results);
    })
})
}