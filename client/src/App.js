import React, { useState, useEffect } from 'react';
import ReactMapGL,{Marker, Popup} from 'react-map-gl';
import { Navbar,Nav } from 'react-bootstrap'
import { listPlantEntries } from './API';
import PlantEntryForm from './PlantEntryForm'
import './App.css'

function App() {
  const [ plantEntries, setPlantEntries] = useState([]);
  const [showPopup, setShowPopup] = useState([]);
  const [addEntryLocation, setAddEntryLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 23.0707,
    longitude: 80.0982,
    zoom: 3
  });

  const getEntries = async () => {
    const plantEntries = await listPlantEntries();
    setPlantEntries(plantEntries);
  };

  useEffect( () => {
      getEntries();
     }, []);

  const showAddMarkerPopup = (event) => {
    const [ longitude, latitude ] = event.lngLat;
    setAddEntryLocation({
      latitude,
      longitude,
    });
  };

  return (
    <div>
    <Navbar id="navbar">
    <Navbar.Brand href="#home" id="title">Greenagain</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#blog">Blog</Nav.Link>
      <Nav.Link href="#stats">Stats</Nav.Link>
      <Nav.Link href="#count">Count:{plantEntries.length}</Nav.Link>
    </Nav>
    </Navbar>
    <ReactMapGL 
      {...viewport}
      mapStyle="mapbox://styles/thecjreynolds/ck117fnjy0ff61cnsclwimyay"
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_ACCESS_TOKEN}
      onDblClick={showAddMarkerPopup}
      >
      {
        plantEntries.map(entry => (
          <div key={entry._id}>
          <Marker 
            key={entry._id}
            latitude={entry.latitude} 
            longitude={entry.longitude} 
            >
            
            <svg 
              viewBox="0 0 24 24"
              style={{
                height: `${3 * viewport.zoom}px`,
                width: `${3 * viewport.zoom}px`,
              }} 
              stroke="#00ff00" 
              // stroke-width="1" 
              fill="none"
              onClick={() => setShowPopup({
                [entry._id]: true,
              })} 
              // stroke-linecap="round" 
              // stroke-linejoin="round" 
              className="css-i6dzq1 marker">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </Marker>
          {
            showPopup[entry._id] ? (
              <Popup
                latitude={entry.latitude} 
                longitude={entry.longitude}
                closeButton={true}
                closeOnClick={false}
                dynamicPosition={true}
                onClose={() => setShowPopup({})}
                anchor="top" >
                <div className = "popup">
                  {entry.name.toUpperCase()}
                  <br /> 
                <small>Planted On:{new Date(entry.plantDate).toLocaleDateString()}</small>
                {entry.image && <img src={entry.image} alt={entry.title} />} 
                </div>
              </Popup>
            ) : null
          }
        </div>
        ))
      }
      {
        addEntryLocation ? (
          <>
          <Marker
            latitude={addEntryLocation.latitude}
            longitude={addEntryLocation.longitude}
          >
            <div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                style={{
                  height: `${4 * viewport.zoom}px`,
                  width: `${4 * viewport.zoom}px`,
                }}  
                viewBox="0 0 24 24" 
                fill="none" stroke="red" 
                // strok-width="2" 
                // stroke-linecap="round" 
                stroke-linejoin="round" 
                className="feather feather-map-pin marker">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3">
                </circle>
              </svg>
            </div>
          </Marker>
          <Popup
              latitude={addEntryLocation.latitude} 
              longitude={addEntryLocation.longitude}
              closeButton={true}
              closeOnClick={false}
              dynamicPosition={true}
              onClose={() => setAddEntryLocation(null)}
              anchor="top" >
              <div className = "popup">
                <PlantEntryForm onClose={() => {
                  setAddEntryLocation(null);
                  getEntries();
                }} location={addEntryLocation}/> 
              </div>
          </Popup>
          </>
        ) : null
      }
    </ReactMapGL>
      
    </div>
  );
}
export default App;
