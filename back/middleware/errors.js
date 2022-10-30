const ErrorHandler = require('../utils/erroHandler')

module.exports = (err, req, res, next) =>{
    err.statusCode= err.statusCode || 500;
    err.message= err.message || "Internet Server Error"

    res.status(err.statusCode).json({
        success:false,
        message: err.stack
    })

}    
