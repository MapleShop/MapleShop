//Dentro del metodo getProducts puedo utilizar cualquiera de estas herramientas (Getmapping)
exports.getProducts=(req,res,next) =>{
    res.status(200).json({
        success:true,
        message: "En esta ruta usted va a poder ver todos los productos"
    })
}