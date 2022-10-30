const express=require("express");
const app = express();
const errorMiddleware= require("./middleware/errors")

//La app si va a usar recursos con json
app.use(express.json());

//Importar rutas
const productos=require("./routes/products")
const usuarios=require("./routes/auth")

<<<<<<< HEAD
app.use('/api',productos) //Direccionamiento, sujeto a decision (ruta del navegador)
app.use('/api',usuarios)

//MiddleWares para manejar errores
=======
//Direccionamiento, sujeto a decision (ruta del navegador)
app.use('/api', productos)
app.use('/api',usuarios)

//Middlewares para manejar errores de manera global
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
app.use(errorMiddleware)

module.exports=app