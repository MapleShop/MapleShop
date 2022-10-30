<<<<<<< HEAD
const mongoose = require("mongoose")
const validator= require("validator")
const bcrypt = require("bcryptjs")
=======
//Autenticación de usuarios

const mongoose = require("mongoose")
const validator= require("validator")
const bcrypt= require("bcryptjs")
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3

const usuarioSchema= new mongoose.Schema({
    nombre:{
        type:String,
<<<<<<< HEAD
        required: [true, "Por favor ingrese el nombre"],
        maxLength: [120, "Nombre no puede exceder los 120 caracteres"]
    },
=======
        required:[true, "Por favor ingrese el nombre"],
        maxlength: [120, "Nombre no puede exceder los 120 caracteres"]
    },

>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
    email:{
        type: String,
        required: [true, "Por favor ingrese el correo electronico"],
        unique: true,
        validate: [validator.isEmail, "Por favor ingrese un email valido"]
    },
<<<<<<< HEAD
    password:{
        type: String,
        required: [true, "Por favor registre una contraseña"],
        minlength: [8, "Tu contraseña no puede tener menos de 8 caracteres"],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
=======

    password:{
        type: String,
        required: [true, "Por favor registre una constraseña"],
        minlength: [8, "Tu contraseña no puede tener menos de 8 caracteres"],
        select: false
    },

    avatar: {
        public_id:{
            type: String,
            required:true
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
        },
        url:{
            type: String,
            required: true
        }
    },
<<<<<<< HEAD
    role:{
        type: String,
        default: 'user'
    },
=======

    role: {
        type: String, 
        default: 'user'
    },

>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
    fechaRegistro:{
        type: Date,
        default: Date.now
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date

    })
<<<<<<< HEAD
    usuarioSchema.pre("save", async function(next) {
        if (!this.isModified("password")){
=======

    usuarioSchema.pre("save", async function(next){
        if(!this.isModified("password")){
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
            next()
        }
        this.password = await bcrypt.hash(this.password, 10)    
})

<<<<<<< HEAD
module.exports = mongoose.model("auth",usuarioSchema)
=======

module.exports = mongoose.model("auth", usuarioSchema)
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
