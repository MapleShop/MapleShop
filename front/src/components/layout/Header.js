import React, { Fragment } from 'react'
<<<<<<< HEAD
import "../../App.css"
import { Link } from "react-router-dom"

const Header = () => {

  return (
    <Fragment>
        <nav className='navbar row'>
            <div className='col-12 col-md-3'>
                <div className='navbar-brand'>
                    <Link to="/"><img src="./images/MapleShop.png" alt='Maple Shop Logo'></img></Link>
                </div>
            </div>

            <div className='col-12 col-md-6 mt-2 mt-md-0'>
                <div className='input-group'>
                    <input
                        type="text"
                        id="search_field"
                        class="form-control"
                        placeholder='¿Que producto busca?'></input>
                        <div class="input-group-append">
                            <button id="search-btn" class="btn">
                                <i class="fa fa-search-plus text-white"  aria-hidden="true"></i>
                                </button>
                        </div>
                </div>
            </div>
            <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
                <div className='ml-4 dropdown d-inline'>
                    <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                        id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>Panel de Control</span></Link>
                    <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                        <Link className="dropdown-item" to="/dashboard">Adm. Productos</Link>
                        <Link className="dropdown-item" to="/">Pedidos</Link>
                        <Link className="dropdown-item" to="/">Mi Cuenta</Link>
                        <Link className="dropdown-item" to="/">Cerrar Sesion</Link>
                    </div>
                </div>
                
                <Link to="/carrito"><i class='fa fa-shopping-cart fa-2x text-white' aria-hidden="true"></i>
                    <span className='ml-1' id='cart_count'>2</span></Link>
            </div>

        </nav>

    </Fragment>
  )
  
=======

const Header = () => {
    return (
        <Fragment>
            <nav className="navbar row">
                <div className="col-12 col-md-3 mt-2 mt-md-0">
                        <div class="input-group">
                            <input
                                type="text"
                                id="search_field"
                                class="form-control"
                                placeholder="¿Que producto buscas?">
                            </input>
                            <div class="input-group-append">
                                <button id="search_btn" class="btn"> Buscar
                                    <i class="fa fa fa" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                </div>
                
                <div className="col-12 col-md-2">
                    <div className="navbar-brand">
                        <img src="./images/default-logo.png" alt="Logo de la empresa" />
                    </div>
                </div>
                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <span><button className='btn' id="login_btn">Inicie Sesión</button></span>

                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
                    <span className="ml-1" id="cart_count">2</span>
                </div>
            </nav>
        </Fragment>
    )
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
}

export default Header