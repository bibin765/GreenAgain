import React from 'react';
import App from './App';
import Navmain from './Navmain';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'

function Layout(){
    return(
        <Router>
            <div>
                <Navmain />
                <Switch>
                <Route path="/" exact component ={Home} />
                <Route path="/map" component={App} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}
export default Layout;