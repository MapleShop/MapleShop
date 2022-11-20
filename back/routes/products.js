const express=require("express")
const router=express.Router();

const {getProducts, 
    newProduct, 
    getProductById, 
    updateProduct, 
    deleteProduct, 
    createProductReview, 
    getProductReviews, 
    deleteReview,
    getAdminProducts
} = require("../controllers/productsController"); //Traemos la respuesta json desde el controlador
const { isAuthenticatedUser , authorizeRoles } = require("../middleware/auth");


//probemos autenticacion
router.route('/productos').get(getProducts)  //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/:id').get(getProductById); //Ruta para consultar por Id.
router.route("/review").put(isAuthenticatedUser, createProductReview)
router.route("/reviews").get(isAuthenticatedUser, getProductReviews)
router.route("/review").delete(isAuthenticatedUser, deleteReview)

//RUTAS ADMIN
router.route('/producto/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct); //Creacion de la ruta de actualizacion
router.route('/producto/:id').delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct); //Creacion de la ruta de eliminacion por id.
router.route('/producto/nuevo').post(isAuthenticatedUser, authorizeRoles("admin"), newProduct);
router.route('/admin/productos').get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);



module.exports=router; //Para que el router sea visto desde afuera