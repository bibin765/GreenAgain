import React, { useState, useEffect } from 'react';
import ReactMapGL,{Marker} from 'react-map-gl';
//import { render } from '@testing-library/react';
import { Navbar,Nav } from 'react-bootstrap'
import { listPlantEntries } from './API';
import './App.css'

function App() {
  const [ plantEntries, setPlantEntries] = useState([]);
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 23.0707,
    longitude: 80.0982,
    zoom: 3
  });

  useEffect( () => {
    (async () => {
      const plantEntries = await listPlantEntries();
      setPlantEntries(plantEntries);
    })();
   
  }, []);

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
      >
      {
        plantEntries.map(entry => (
          <Marker 
          latitude={10.8505} 
          longitude={78.9629} 
          >
          
          <svg viewBox="0 0 24 24"
          style={{
            height: `${3 * viewport.zoom}px`,
            width: `${3 * viewport.zoom}px`,
          }} 
          stroke="#00ff00" 
          stroke-width="1" 
          fill="none" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          class="css-i6dzq1">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          </Marker>
        ))

      }
      </ReactMapGL>
      
    </div>
  );
}
export default App;
