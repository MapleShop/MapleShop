import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from './store';
import { positions, transitions, Provider as AlertProvider} from 'react-alert';
=======
import { Provider } from 'react-redux'; //Lo importo para que haga las veces de un proveedor externo
import store from './store';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
import AlertTemplate from 'react-alert-template-basic';

const options ={
  timeout: 3000,
<<<<<<< HEAD
  positions: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
=======
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
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
  </Provider>
);
