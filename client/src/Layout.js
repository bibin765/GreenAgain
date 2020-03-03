import React from 'react';
import App from './App';
import Navmain from './Navmain';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'

function Layout(){
    return(
        <Router>
            <div>
                <Navmain />
                <Switch>
                <Route path="/" exact component ={Home} />
                <Route path="/map" component={App} />
                </Switch>
            </div>
        </Router>
    )
}
export default Layout;