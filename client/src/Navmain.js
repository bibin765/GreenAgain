import React from "react";
import { Navbar,Nav } from 'react-bootstrap'
import { Link }from 'react-router-dom';

class Navmain extends React.Component{
    constructor(){
        super();
        this.props = {
            
        }
    }
    render(){
        return(
            <Navbar id="navbar">
            <Navbar.Brand id="title"><b><Link to="/" style={{ color: '#fff' }}>Greenagain</Link></b></Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link ><Link to="/" style={{ color: '#fff' }}>Home</Link></Nav.Link>
            <Nav.Link ><Link to="/map" style={{ color: '#fff' }}>Map</Link></Nav.Link>
            <Nav.Link ><Link to="/stats" style={{ color: '#fff' }}>Stats</Link></Nav.Link>
            </Nav>
            </Navbar>
        );
    }
}
export default Navmain;
