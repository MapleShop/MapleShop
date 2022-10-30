import './App.css';
<<<<<<< HEAD
import React from 'react'; 
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
import { ProductDetails } from './components/products/ProductDetails';
//Router traido desde react-router-dom (no confundir con el de express)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductsList';
import NewProduct from './components/admin/newProduct';
import Cart from './components/cart/Cart';
=======
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
//Router traido desde react-router-dom (no confundir con el de express)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductDetails } from './components/products/ProductDetails';
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3


function App() {
  return (
    <Router>
    <div className="App">
        <Header />
<<<<<<< HEAD
        <div className='container container=fluid'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/producto/:id" element={<ProductDetails />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/productList" element={<ProductsList />}/>
            <Route path="/nuevoProducto" element={<NewProduct />}/>
            <Route path="/carrito" element={<Cart />}/>
=======
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/producto/:id" element={<ProductDetails/>}/>
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
          </Routes>
        </div>
        <Footer />
    </div>
    </Router>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
