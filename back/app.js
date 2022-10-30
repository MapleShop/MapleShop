const express=require("express");
const app = express();
const errorMiddleware= require("./middleware/errors")

//La app si va a usar recursos con json
app.use(express.json());

//Importar rutas
const productos=require("./routes/products")
const usuarios=require("./routes/auth")

app.use('/api',productos) //Direccionamiento, sujeto a decision (ruta del navegador)
app.use('/api',usuarios)

//MiddleWares para manejar errores
app.use(errorMiddleware)

module.exports=app