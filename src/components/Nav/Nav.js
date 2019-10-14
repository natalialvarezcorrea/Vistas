import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';


class Nav extends React.Component {
    render() {

        const NuncaExpandirse = {
            verticalAlign: 'inherit'
        }

        const nav = {
            backgroundColor: '#000'
        }
        return (
            <Fragment>

                <div className="text-center">
                    <div className=" cover-container d-flex w-100 h-100 p-3 mx-auto flex-column navegar">

                        <main role="main">


                            <section className="text-center">
                                <nav className="navbar navbar-expand-sm ">
                                    <a className="navbar-brand" href="#">
                                        <font style={NuncaExpandirse}>
                                            <font style={NuncaExpandirse}>Nunca expandirse</font>
                                        </font>
                                    </a>
                                    <button className="navbar-toggler collapsed navbar-dark " style={nav}
                                        type="button" data-toggle="collapse" data-target="#navbarsExample01"
                                        aria-controls="navbarsExample01" aria-expanded="false"
                                        aria-label="Navegación de palanca">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="navbar-collapse collapse" id="navbarsExample01" >
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item active">
                                                <Link className="nav-link" to={"/"}>
                                                    <font style={NuncaExpandirse}>
                                                        <font style={NuncaExpandirse}>Inicio </font>
                                                    </font><span className="sr-only">
                                                        <font style={NuncaExpandirse}>
                                                            <font style={NuncaExpandirse}>(actual)</font>
                                                        </font>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={"/Registro"}>
                                                    <font style={NuncaExpandirse}>
                                                        <font style={NuncaExpandirse}>Registro</font>
                                                    </font>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link " to={"/Login"}>
                                                    <font style={NuncaExpandirse}>
                                                        <font style={NuncaExpandirse}>inicio sesion </font>
                                                    </font>
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link " to={"/Pago"} id="dropdown01" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    <font style={NuncaExpandirse}>
                                                        <font style={NuncaExpandirse}>Pago</font>
                                                    </font>
                                                </Link>

                                            </li>
                                        </ul>
                                        <form className="form-inline my-2 my-md-0">
                                            <input className="form-control" type="text" placeholder="Search" aria-label="Buscar" />
                                        </form>
                                    </div>
                                </nav>

                            </section>
                        </main>

                    </div>
                </div>

            </Fragment>

        );
    }
}

export default Nav;