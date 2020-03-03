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
            <Navbar className="navbar navbar-dark bg-custom-2" >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand id="title"><b><Link to="/" style={{ color: '#070707' }}>GreenagainChallenge</Link></b></Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link ><Link to="/" style={{ color: '#070707' }}>Home</Link></Nav.Link>
            <Nav.Link ><Link to="/map" style={{ color: '#070707' }}>Map</Link></Nav.Link>
            </Nav>
            </Navbar>
        );
    }
}
export default Navmain;
