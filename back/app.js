const express=require("express");
const app = express();
const errorMiddleware= require("./middleware/errors")

//La app si va a usar recursos con json
app.use(express.json());

//Importar rutas
const productos=require("./routes/products")
const usuarios=require("./routes/auth")

//Direccionamiento, sujeto a decision (ruta del navegador)
app.use('/api', productos)
app.use('/api',usuarios)

//Middlewares para manejar errores de manera global
app.use(errorMiddleware)

module.exports=app