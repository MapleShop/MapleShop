<<<<<<< HEAD
const ErrorHandler = require('../utils/erroHandler')

module.exports = (err, req, res, next) =>{
    err.statusCode= err.statusCode || 500;
    err.message= err.message || "Internet Server Error"

    res.status(err.statusCode).json({
        success:false,
        message: err.stack
    })

}    
=======
const ErrorHandler = require('../utils/errorHandler')

//Cuando llegue un msje que diga 500, detecta que es un error, se lo envia al errorHandler para que lo cree en sistema y pueda hacer una trazabilida del error
module.exports = (err, req, res, next) =>{
    err.statusCode= err.statusCode ||500;
    err.message= err.message || "Internal Server Error"

    res.status(err.statusCode).json({
        success:false,
        message: err.stack //Con stack tenemos una respuesta mas extensa y detallada
    })
}
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
