const app=require("./app")

//Setear el archivo de configuración
const dotenv=require("dotenv");
const connectDatabase = require("./config/database");
dotenv.config({path: 'back/config/config.env'})

//Configurar base de datos con el metodo connectDatabase

connectDatabase();

//Llamamos al server
const server=app.listen(process.env.PORT, () =>{
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})