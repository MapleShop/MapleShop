<<<<<<< HEAD
//Dentro del metodo getProducts puedo utilizar cualquiera de estas herramientas (Getmapping)
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto=require("../models/productos");
const ErrorHandler = require("../utils/erroHandler");
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //

//Ver lista de productos
exports.getProducts= catchAsyncErrors(async (req,res,next) =>{
    const productos= await producto.find();
    if (!productos){
        return next(new ErrorHandler("Informacion no encontrada", 404))
       }    

    res.status(200).json({
        success:true,
        cantidad: productos.length,
        productos        
=======
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto=require("../models/productos");
const ErrorHandler = require("../utils/errorHandler");
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpacion de required

//Ver la lista de productos
exports.getProducts= catchAsyncErrors(async(req,res,next) =>{
    const productos= await producto.find();
    if (!productos){
        return res.status(404).json({
            success:false,
            error:true
        })
    }
    res.status(200).json({
        success:true,
        count: productos.length,//Hace el conteo de los productos
        productos
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
    })
})

//Ver un producto por ID
<<<<<<< HEAD
exports.getProductById=  catchAsyncErrors( async (req, res, next)=>{
    const product= await producto.findById(req.params.id)
    
    if (!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
       }
    res.status(200).json({
        success:true,
        mensaje: "Aqui debajo encuentras informacion sobre tu producto: ",
        product        
    })
})

//Update un producto
exports.updateProduct= catchAsyncErrors(async (req, res, next) =>{
    let product=await producto.findById(req.params.id)//Variable de tipo modificable
    if (!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
       }

    //Si el objeto si existia, entonces si ejecuto la actualizacion
    product= await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true, // Valido solo los atributos nuevos o actualizados
        runValidators:true
    });
    // Respondo Ok si el producto si se actualizó
=======
exports.getProductById= catchAsyncErrors(async(req, res, next) =>{
    const product=await producto.findById(req.params.id)
    
    if (!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
        }
    
    res.status(200).json({
        success:true,
        message: "Aqui debajo encuentras información sobre tu producto",
        product
    })
})

// Update un producto
exports.updateProduct= catchAsyncErrors(async (req, res, next) =>{
    let product=await producto.findById(req.params.id)//Variable de tipo modificable
    if (!product){//Verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({
            success:false,
            message: "No encontramos ese producto"
        })
    }

    //Si el objeto si existia, entonces si ejecuto la actualizacion
    product=await producto.findByIdAndUpdate(req.params.id, req.body, {
        new: true,//Valido solo los atributos nuevos o actualizados
        runValidators:true
    });
    //Respondo Ok si el producto si se actualizó
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        product
    })
})

<<<<<<< HEAD
//Eliminar un producto
exports.deleteProduct= catchAsyncErrors(async (req, res, next) =>{
    const product=await producto.findById(req.params.id)//Variable de tipo modificable
    if (!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
       }

    await product.remove(); //Eliminamos el proceso
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente",
    })
})    

//Crear nuevo producto /api/productos
exports.newProduct= catchAsyncErrors(async(req,res,next)=>{
    const product= await producto.create(req.body);
=======
//Crear un nuevo producto /api/productos
exports.newProduct= catchAsyncErrors(async(req,res,next)=>{
    const product=await producto.create(req.body);
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3

    res.status(201).json({
        success:true,
        product
    })
})

<<<<<<< HEAD
//HABLEMOS DE FETCH
=======
//Eliminar un producto
exports.deleteProduct= catchAsyncErrors(async (req, res, next) =>{
    const product=await producto.findById(req.params.id)//Variable de tipo modificable
    if (!product){//Verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({
            success:false,
            message: "No encontramos ese producto"
        })
    }

    await product.remove();//Eliminamos el proceso
    res.status(200).json({
        success:true,
        message: "Producto eliminado correctamente",
    })
})

//Hablemos de Fetch
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

<<<<<<< HEAD
//verProductos(); Llamamos al metodo creado para probar la consulta

//Ver por id
=======
//verProductos(); //Llamamos el metodo creado para probar la consulta

//Ver id

>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

<<<<<<< HEAD
//verProductoPorID('634896f6ba6893b54ef60242'); Probamos el metodo con un id.
=======
//verProductoPorID('6349ed8da282af29c43c6de6'); //Probamos el metodo con un id

//npm install node-fetch (para instalar el modulo)
//const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpacion de required
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
