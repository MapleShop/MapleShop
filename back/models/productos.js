const mongoose=require("mongoose")

const productosSchema=mongoose.Schema({
    nombre:{
        type:String,
<<<<<<< HEAD
        required:[true,"Por favor, registra el nombre del producto."],
        trim:true, //Elimina los espacios o caracteres en blanco.
=======
        required:[true,"Por favor registra el nombre del producto."],
        trim:true,
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
        maxLength:[120,"El nombre del producto no debe exceder los 120 caracteres."]
    },
    precio:{
        type: Number,
<<<<<<< HEAD
        required:[true,"Por favor, registre el precio del producto."],
        maxLength:[8, "El precio del producto no puede estar por encima de 99'999.999"],
        default: 0.0
    },
    descripcion:{
        type:String,
        required:[true,"Por favor, registre una descripcion para el producto."],
=======
        required:[true, "Por favor registre el precio del producto."],
        maxLength:[8,"El precio del producto no puede estar por encima de 99'999.999"],
        default:0.0
    },
    descripcion:{
        type:String,
        required:[true, "Por favor registre una descripcion para el producto."]
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
    },
    calificacion:{
        type: Number,
        default: 0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
<<<<<<< HEAD
        requeired:[true,"Por favor, seleccione la categoria de producto."],
        enum:{
            values:[
                "Hoodies",
                "T Shirts",
                "Jackects & Vests",
                "Caps",
                "Shorts",
                "Socks",
                "Underwear"
=======
        required:[true, "Por favor seleccione la categoria del producto"],
        enum:{
            values:[
                "Hoodies",
                "T-Shirts",
                "Sweaters",
                "Shorts",
                "Caps",
                "Joggers"
            ]
        }
    },
    talla:{
        type:String,
        required:[true, "Por favor seleccione la talla del producto"],
        enum:{
            values:[
                "XS",
                "S",
                "M",
                "L",
                "XL",
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
            ]
        }
    },
    vendedor:{
        type:String,
<<<<<<< HEAD
        required:[true,"Por favor, registre el vendedor del producto"]
    },
    inventario:{
        type: Number,
        required:[true,"Por favor, registre el stock del producto"],
        maxLength:[5,"Cantidad maxima del productono puede sobrepasar 99999"],
        default:0
    },
    numCalificaciones:{
        type:Number,
=======
        required:[true, "Por favor registre el vendedor del producto"]
    },
    inventario:{
        type: Number,
        required:[true, "Por favor registre el stock del producto"],
        maxLength:[5,"Cantidad maxima del producto no puede sobrepasar 99999"],
        default:0
    },
    numCalificaciones:{
        type: Number,
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
<<<<<<< HEAD
                required: true
            },
            rating:{
                type:Number,
                required:true
            },
            Comentario:{
=======
                required:true,
            },
            rating:{
                type: Number,
                required:true,
            },
            comentario:{
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
                type:String,
                required:true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }
<<<<<<< HEAD

})

module.exports=mongoose.model("productos",productosSchema)
=======
})

module.exports=mongoose.model("productos", productosSchema)
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
