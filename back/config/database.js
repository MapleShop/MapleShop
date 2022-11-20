//Archivo para poder conectarme a base de datos

//Mongoose nos permite interactuar con base de datos, entonces necesito crear un objeto de tipo mongoose
const mongoose=require("mongoose");

//Metodo que ejecute la conexión a base de datos
const connectDatabase = () =>{
    mongoose.connect(process.env.DB_URI, {//Convoco al archivo de config, cuando necesito algo de el, llamo al enviroment del proceso
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(conectar => {
        console.log(`Base de datos mongo conectada con el servidor: ${conectar.connection.host}`)
    })
}

//Lo exporto para poder usar el recurso de mongoose por fuera
module.exports=connectDatabase;