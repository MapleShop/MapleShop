<<<<<<< HEAD
const mongoose=require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con=>{
        console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host}`)        
    }).catch(con => {
        console.log(`No se logro la conexion con la base de datos`)
    })
}

=======
//Archivo para poder conectarme a base de datos

//Mongoose nos permite interactuar con base de datos, entonces necesito crear un objeto de tipo mongoose
const mongoose=require("mongoose");

//Metodo que ejecute la conexión a base de datos
const connectDatabase = () =>{
    mongoose.connect(process.env.DB_LOCAL_URI, {//Convoco al archivo de config, cuando necesito algo de el, llamo al enviroment del proceso
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(conectar => {
        console.log(`Base de datos mongo conectada con el servidor: ${conectar.connection.host}`)
    })
}

//Lo exporto para poder usar el recurso de mongoose por fuera
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
module.exports=connectDatabase;