import React, { Fragment } from 'react';


function Login() {
    const NuncaExpandirse = {
        verticalAlign: 'inherit'
    }

    return (

        <Fragment>

            <div className="text-center">

                <form className="form-signin boxlogin" action="/signin" method="POST">
                    <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">
                        <font style={NuncaExpandirse}>
                            <font style={NuncaExpandirse}>Iniciar Sesion</font>
                        </font>
                    </h1>
                    <label for="inputEmail" className="sr-only">
                        <font style={NuncaExpandirse}>
                            <font style={NuncaExpandirse}>Dirección de correo electrónico</font>
                        </font>
                    </label>
                    <input type="email" id="inputEmail" className="form-control mb-3" name="email" placeholder="Email address"
                        required="" autofocus="" />
                    <label for="inputPassword" className="sr-only">
                        <font style={NuncaExpandirse}>
                            <font style={NuncaExpandirse}>Contraseña</font>
                        </font>
                    </label>
                    <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password"
                        required="" />
                    <div className="checkbox ">
                        <label>
                            <input type="checkbox" value="remember-me" className="mb-3" />
                            <font style={NuncaExpandirse}>
                                <font style={NuncaExpandirse}> Recuérdame </font>
                            </font>
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">
                        <font style={NuncaExpandirse}>
                            <font style={NuncaExpandirse}>iniciar</font>
                        </font>
                    </button>
                    <p className="mt-5 mb-3 text-muted">
                        <font style={NuncaExpandirse}>
                            <font style={NuncaExpandirse}>© 2017-2019</font>
                        </font>
                        <font style={NuncaExpandirse}><a href="">Iniciar </a><a href="">/Registrarse</a></font>
                    </p>
                </form>
            </div>


        </Fragment >


    )



}

export default Login;