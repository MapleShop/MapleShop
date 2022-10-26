import React, { Fragment } from 'react'

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
}

export default Header