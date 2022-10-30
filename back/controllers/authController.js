const User = require("../models/auth")
<<<<<<< HEAD
const ErrorHandler= require("../utils/erroHandler")
=======
const ErrorHandler= require("../utils/errorHandler")
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
const catchAsyncErrors= require("../middleware/catchAsyncErrors")

//Registrar un nuevo usuario /api/usuario/registro

exports.registroUsuario= catchAsyncErrors(async (req, res, next) =>{
    const {nombre, email, password} = req.body;

    const user = await User.create({
<<<<<<< HEAD
        nombre,
        email,
        password,
        avatar:{
            public_id: "peoples-avatars",
            url:"https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/account-icon.png"
=======
        nombre, 
        email,
        password,
        avatar:{
            public_id:"ADJHASDGSAHBDHDKAS",
            url: "https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
        }
    })

    res.status(201).json({
        success:true,
        user
    })
<<<<<<< HEAD
=======

    
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
})