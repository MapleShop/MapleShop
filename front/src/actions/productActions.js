//Axios es la libreria que me va a permitir consumir el API que ya construimos(productsController)
import axios from 'axios';

//Posibles constantes
import{
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/productConstants';

//Si todo sale bien, me va a traer información
//Hace un llamado y espera que se cumpla una promesa, del cumplimiento del metodo asincrono depende de una entrega
export const getProducts = () => async(dispatch)=>{
    try {
        dispatch({type: ALL_PRODUCTS_REQUEST})

        //Nuestro metodo va a una ruta:

        const {data} = await axios.get('api/productos') //Inicializo una variable data, depende del cumplimiento de la promesa ejecutando axios para comunicarse con la ruta, y va a ejecutar el get dentro de ella y lo que le responda lo guarda en data
    
        //Si pude cargar información en data, hubo exito

        dispatch({
            type:ALL_PRODUCTS_SUCCESS,
            payload:data
        })
    }catch(error){//Si el try no funciono, hacemos el catch
        dispatch({
            type:ALL_PRODUCTS_FAIL,
            payload:error.response.data.message //Error por default
        })
    }
}

//ACCIONES PARA OBTENER DETALLES DE UN PRODUCTO
export const getProductDetails = (id) => async(dispatch)=>{
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})
        //Se usan comillas al reves porque estamos utilizando una variable que ingresa
        const {data} = await axios.get(`/api/producto/${id}`) //Inicializo una variable data, depende del cumplimiento de la promesa ejecutando axios para comunicarse con la ruta, y va a ejecutar el get dentro de ella y lo que le responda lo guarda en data
    
        //Si pude cargar información en data, hubo exito

        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data.product
        })
    }catch(error){//Si el try no funciono, hacemos el catch
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:error.response.data.message //Error por default
        })
    }
}

//Clear error 
export const clearErrors = () => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}

