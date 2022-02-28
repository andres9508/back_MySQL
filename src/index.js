
const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3030;
const  usuarios  = require("../routes/usuarios");
const db = require("../db/database");


//db
(async()=>{
    try {
        await db.authenticate()
        await db.sync()
        console.log("conectados a la base de datos")
    } catch (error) {
        throw new Error (error)
    }
   
})()



//midndware
app.use(express.json());//recibir imformacion
app.use(cors());//habilitar otras aplicaciones para recibir solicitudes a nuestra app


//rutas
app.use('/usuarios', usuarios)


app.listen(port,()=>{
    console.log('Servidor ejecutandose en el puerto',port)
})
