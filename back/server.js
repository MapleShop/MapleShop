const app=require("./app")
const connectDatabase = require("./config/database");

//Setear el archivo de configuración
const dotenv=require("dotenv");
const connectDatabase = require("./config/database");
dotenv.config({path: 'back/config/config.env'})

<<<<<<< HEAD
//Configurar base de datos
connectDatabase()
=======
//Configurar base de datos con el metodo connectDatabase

connectDatabase();
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3

//Llamamos al server
const server=app.listen(process.env.PORT, () =>{
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})