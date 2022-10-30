const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts)  //Establecemos desde que ruta queremos ver el getProducts
<<<<<<< HEAD
router.route('/producto/nuevo').post(newProduct);
router.route('/producto/:id').get(getProductById); //Ruta para consultar por Id.
router.route('/producto/:id').put(updateProduct); //Creacion de la ruta de actualizacion
router.route('/producto/:id').delete(deleteProduct); //Creacion de la ruta de eliminacion por id.

=======
router.route('/producto/nuevo').post(newProduct); //Establecemos la ruta
router.route('/producto/:id').get(getProductById);//Ruta para consultar by id
router.route('/producto/:id').put(updateProduct);//Creacion de la ruta de actualizacion
router.route('/producto/:id').delete(deleteProduct);//Creacion de la ruta de eliminacion por ID
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3

module.exports=router; //Para que el router sea visto desde afuera