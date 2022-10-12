const express=require("express");
const app = express();

//La app si va a usar recursos con json
app.use(express.json());

//Importar rutas
const productos=require("./routes/products")

//Direccionamiento, sujeto a decision (ruta del navegador)
app.use('/api', productos)

module.exports=app