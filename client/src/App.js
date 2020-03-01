import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
//import { render } from '@testing-library/react';
import {Navbar,Nav } from 'react-bootstrap'
import './App.css'

function App() {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 23.0707,
    longitude: 80.0982,
    zoom: 3
  });

  return (
    <div>
    <Navbar id="navbar">
    <Navbar.Brand href="#home" id="title">Greenagain</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Blog</Nav.Link>
      <Nav.Link href="#pricing">Stats</Nav.Link>
    </Nav>
    </Navbar>
    <ReactMapGL 
      {...viewport}
      mapStyle="mapbox://styles/thecjreynolds/ck117fnjy0ff61cnsclwimyay"
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_ACCESS_TOKEN}
    />
    </div>
  );
}
export default App;
