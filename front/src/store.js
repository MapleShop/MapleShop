//Aca configuro lo necesario para que mi aplicativo sepa que esto es una tienda
//Esta identificacion está dentro del src porque aplica para todo los JS de mi aplicativo

//Importo desde Redux los siguientes métodos: crearstore, combinereducers y applymiddleware (controlar flujos de información entre el back y el front)

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //Dar un toque y espera una respuesta 
import { composeWithDevTools} from 'redux-devtools-extension'
import { productReducer,productDetailReducer } from './reducer/productReducer';

//Creo el reductor
const reducer= combineReducers ({
    products:productReducer,
    productsDetails:productDetailReducer
})

//Creo el estado inicial, es de tipo Let porque puedo modificar el tipo de variable pero no la puedo volver a declarar
let initialState = {}

//Creo la constante que me permite controlar los flujos de información, espera respuesta del thunk porque este se convierte en el mensajero
const middleware= [thunk] 

//Creo la tienda
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) // Esperar se puede expresar con ...

export default store; //Lo importo en el index.js