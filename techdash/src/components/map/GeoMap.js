import React from 'react'
import MapGL, {GeolocateControl, Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {Col} from "react-bootstrap"
import RoomIcon from '@material-ui/icons/Room';

import 'mapbox-gl/dist/mapbox-gl.css';
const { REACT_APP_MAPBOX_TOKEN } = require('./config')

const geolocateStyle = {
  top: 0,
  left: 0,
  margin: 0
};

const positionOptions = {enableHighAccuracy: true};

function GeoMap({ data, userName, loading, error }) {
    
    
    const [viewport, setViewport] = React.useState({
        
        latitude: -1.3968888,
        longitude: 36.7927116,
        width: 920,
        height: 400,
        zoom: 18,
        bearing: 0,
        pitch: 50
    });
    
    
    
    if(loading){
      return <h1>Loading ...</h1>
    }
    
    if(data){
        
        
      const services = data.getServices;
      return(
          services.map((service) => (
              <div key={service.id}>
                  {
                      service.username === userName ? (
                          
                          <MapGL
                            mapboxApiAccessToken = {
                              REACT_APP_MAPBOX_TOKEN
                            }
                            {...viewport}
                            
                            
                            onViewportChange={(viewport) => setViewport(viewport)}
                          >
                              
                              <br />
                              {service.requests.map((request) => (
                                  <div key={request.id} style={{padding: "0px"}}>
                                      
                                      <Marker key={request.id} latitude={request.latitude} longitude={request.longitude} offsetLeft={-20} offsetTop={-10}>
                                          <div style={{ cursor: 'pointer' }} onClick={() => alert(`${request.username}: ${service.description}, ${service.createdAt} ago`)}>
                                            <RoomIcon 
                                              
                                              width={viewport.zoom * 5}
                                              height={viewport.zoom * 5}
                                              style={{color: "#F8D210", overflow: "auto"}}
                                            />
                                            <span>
                                              {request.username}
                                            </span>
                                            
                                          </div>
                                      </Marker>
                                      
                                      
                                  </div>
                              ))}
                              <GeolocateControl
                                style={geolocateStyle}
                                positionOptions={positionOptions}
                                trackUserLocation
                                auto
                              />

                              
                          </MapGL>
                      ): ""
                  }
              </div>
              
          ))
      )
  }  
}

export default GeoMap
