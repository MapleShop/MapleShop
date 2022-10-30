<<<<<<< HEAD
import { ALL_PRODUCTS_REQUEST, 
    ALL_PRODUCTS_SUCCESS, 
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL, 
    CLEAR_ERRORS } from "../constants/productConstants";

export const productsReducer =  (state ={ products: []}, action)=>{
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return{
                loading:true,
                productos:[]
=======
import { ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS} from "../constants/productConstants";

//Creamos una constante de caracter exportable, involucra en su funcionamiento un posible estado
//que es igual a la respuesta que nos va dar 'productos' que vienen en un diccionario (la respuesta será 
//un bloque que tendrá productos y que además van a ejecutar una accion
export const productReducer = (state ={ productos: []}, action)=>{
    //Empezamos a reducir dependiendo de cuales son los posibles estados que se mezclen
    switch(action.type){//El switch se va a alimentar de una posible acción a ejecutar dependiendo de lo que ocurra. Los tipos suelen ser Strings
        case ALL_PRODUCTS_REQUEST://En caso que el tipo sea la solicitud, necesito que me regrese
            return{
                loading:true,//mensaje de True
                productos:[]//Vacio porque apenas lo estoy pidiendo
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
            }

        case ALL_PRODUCTS_SUCCESS:
            return{
                loading:false,
                productos: action.payload.productos,
<<<<<<< HEAD
                cantidad: action.payload.cantidad
=======
                count: action.payload.count
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
            }
        
        case ALL_PRODUCTS_FAIL:
            return{
                loading:false,
<<<<<<< HEAD
                error: action.payload
            }
            
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
                
        default:
            return state;
    }
}

// REDUCIR PARA TENER TODOS LOS DETALLES
export const productsDetailsReducer =  (state ={ product: {}}, action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return{
                ...state,
                loading: true            
=======
                error:action.payload
            }
        
        case CLEAR_ERRORS:
            return{
                ...state,//espera un estado
                error:null//llegará todo en blanco, borrará todos los errores
            }

        default:
            return state;//estado por defecto Init

    }
    
}

//REDUCER PARA TENER TODOS LOS DETALLES DEL PRODUCTO
export const productDetailReducer = (state ={ product: {}}, action)=>{
    //Empezamos a reducir dependiendo de cuales son los posibles estados que se mezclen
    switch(action.type){//El switch se va a alimentar de una posible acción a ejecutar dependiendo de lo que ocurra. Los tipos suelen ser Strings
        case PRODUCT_DETAILS_REQUEST://En caso que el tipo sea la solicitud, necesito que me regrese
            return{
                ...state,
                loading:true
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
            }

        case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
<<<<<<< HEAD
                product: action.payload             
=======
                product: action.payload
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
            }
        
        case PRODUCT_DETAILS_FAIL:
            return{
                ...state,
                error: action.payload
            }
<<<<<<< HEAD
            
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
                
        default:
            return state;
    }
=======
        
        case CLEAR_ERRORS:
            return{
                ...state,//espera un estado
                error:null//llegará todo en blanco, borrará todos los errores
            }

        default:
            return state;//estado por defecto Init

    }

>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
}