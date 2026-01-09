import mysql2 from 'mysql2'
import { DB_DATA, DB_HOST, DB_PASS, DB_USER } from '../configurations.js'

const connection = mysql2.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_DATA
})

connection.connect((err) =>{
    if (err){
        console.error("❌No se pudo realizar la coneccion con la base de datos'", err)
        return
    } console.log('✅ Conexion realizada con exito')
})

export default connection