import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'; //Lo importo para que haga las veces de un proveedor externo
import store from './store';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options ={
  timeout: 3000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Proveedor de tipo tienda que se alimenta de la tienda que importamos
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider> 
  </Provider>
);
