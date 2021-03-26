import React from 'react'
import MapGL, {GeolocateControl, Marker} from 'react-map-gl';

import { Grid } from "@material-ui/core"
import RoomIcon from '@material-ui/icons/Room';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Navbar, Footer } from "../";
import 'mapbox-gl/dist/mapbox-gl.css';
const { REACT_APP_MAPBOX_TOKEN } = require('./config')

const geolocateStyle = {
  top: 0,
  left: 0,
  margin: 10
};
const positionOptions = {enableHighAccuracy: true};

function GeoMap() {
    
  const { loading, error, data={} } = useQuery(FETCH_SERVICES_QUERY);
    const [viewport, setViewport] = React.useState({
        
        latitude: -1.3968888,
        longitude: 36.7927116,
        width: window.innerWidth,
        height: window.innerHeight,
        zoom: 18,
        bearing: 0,
        pitch: 50
      });
  if(loading){
    return <h3>Loading...</h3>
  }
  if(error){
    return <h1>{error}</h1>
  }
  else{
    const services = data.getServices;
    console.log(data.getServices);
    return (
      <div style={{padding: 0, margin: 0}}>
        <Navbar />
        
        <Grid container justify="center">
          <Grid item>
            <MapGL
            mapboxApiAccessToken = {
              REACT_APP_MAPBOX_TOKEN
            }
            {...viewport}
            
            
            onViewportChange={(viewport) => setViewport(viewport)}
            > 
              {services.map((service) => (
                
                <Marker key={service.id} latitude={service.latitude} longitude={service.longitude} offsetLeft={-20} offsetTop={-10}>
                  <div style={{ cursor: 'pointer' }} onClick={() => alert(`${service.username}: ${service.description}, ${service.rates}`)}>
                    <RoomIcon 
                      
                      width={viewport.zoom * 5}
                      height={viewport.zoom * 5}
                      style={{color: "#F8D210", overflow: "auto"}}
                    />
                    <span>
                      {service.title}
                    </span>
                    
                  </div>
              </Marker>
              ))}
              <GeolocateControl
                style={geolocateStyle}
                positionOptions={positionOptions}
                trackUserLocation
                auto
              />
            </MapGL>
          </Grid>
        </Grid>
        <Footer />
      </div>
    )
  } 
}
const FETCH_SERVICES_QUERY = gql`
    {
        getServices{
            id createdAt username title longitude latitude description starCount rates
            stars{
                id
                username
            }
            requestCount
            requests{
                id createdAt description
            }
        }
    }
`

export default GeoMap
