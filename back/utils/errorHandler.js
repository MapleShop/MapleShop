//Diseñar el moetodo al que le va a llegar el posible error y va a generar una respuesta
class ErrorHandler extends Error{
    constructor (message, statusCode){
        super(message);
        this.statusCode= statusCode

        Error.captureStackTrace(this, this.constructor) //Calcula y captura todo lo que se involucró en el error
    }
}

module.exports= ErrorHandler