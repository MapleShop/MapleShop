const producto=require("../models/productos")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpacion de required

//Ver la lista de productos
exports.getProducts=async(req,res,next) =>{
    const productos= await producto.find();
    res.status(200).json({
        success:true,
        count: productos.length,//Hace el conteo de los productos
        productos
    })
}

//Ver un producto por ID
exports.getProductById= async(req, res, next) =>{
    const productobyid=await producto.findById(req.params.id)
    if (!productobyid){
        return res.status(404).json({
            success:false,
            message: "No encontramos ese producto"
        })
    }
    res.status(200).json({
        success:true,
        message: "Aqui debajo encuentras información sobre tu producto",
        productobyid
    })
}

// Update un producto
exports.updateProduct= async (req, res, next) =>{
    let productobyid=await producto.findById(req.params.id)//Variable de tipo modificable
    if (!productobyid){//Verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({
            success:false,
            message: "No encontramos ese producto"
        })
    }

    //Si el objeto si existia, entonces si ejecuto la actualizacion
    productobyid=await producto.findByIdAndUpdate(req.params.id, req.body, {
        new: true,//Valido solo los atributos nuevos o actualizados
        runValidators:true
    });
    //Respondo Ok si el producto si se actualizó
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        productobyid
    })
}

//Crear un nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product=await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

//Eliminar un producto
exports.deleteProduct= async (req, res, next) =>{
    const productobyid=await producto.findById(req.params.id)//Variable de tipo modificable
    if (!productobyid){//Verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({
            success:false,
            message: "No encontramos ese producto"
        })
    }

    await productobyid.remove();//Eliminamos el proceso
    res.status(200).json({
        success:true,
        message: "Producto eliminado correctamente",
    })
}

//Hablemos de Fetch
//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos(); //Llamamos el metodo creado para probar la consulta

//Ver id

function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductoPorID('6349ed8da282af29c43c6de6'); //Probamos el metodo con un id

//npm install node-fetch (para instalar el modulo)
//const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpacion de required
