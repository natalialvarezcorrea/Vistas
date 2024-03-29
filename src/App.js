import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home';
import Registro from './components/Registro';
import Login from './components/Login';
import Pago from './components/Pago';
import PropiedadesFiltro from './components/PropiedadesFiltro';
import PropiedadesInfo from './components/PropiedadesInfo';
import Formpropiedades from './components/forms/Formpropiedades';
import Email from './components/Email /Email'
import Dashboard from './components/Dashboard/Dasboard';


class App extends React.Component {
  render() {

    return (
      <Router>
        <Fragment>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Registro' component={Registro} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Pago' component={Pago} />
            <Route exact path='/PropiedadesFiltro' component={PropiedadesFiltro} />
            <Route exact path='/Propiedadesinfo' component={PropiedadesInfo} />
            <Route exact path='/Formpropiedades' component={Formpropiedades} />
            <Route exact path='/Email' component={Email}/>
            <Route exact path='/Dashboard' component={Dashboard}/>


          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default App;