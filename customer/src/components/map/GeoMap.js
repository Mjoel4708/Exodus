import React from 'react'
import MapGL, {GeolocateControl, Marker} from 'react-map-gl';

import { Grid, Modal } from "@material-ui/core"
import RoomIcon from '@material-ui/icons/Room';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Navbar, Footer } from "../";
import 'mapbox-gl/dist/mapbox-gl.css';
import { Redirect } from 'react-router-dom';
const { REACT_APP_MAPBOX_TOKEN } = require('./config')

const geolocateStyle = {
  top: 0,
  left: 0,
  margin: 10
};
const positionOptions = {enableHighAccuracy: true};

function GeoMap() {
  const [open, setOpen] = React.useState(false);
  const [serviceData, setServiceData] = React.useState();  
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
    
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
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
                  <div style={{ cursor: 'pointer' }} onClick={handleOpen}>
                    <RoomIcon 
                      
                      width={viewport.zoom * 5}
                      height={viewport.zoom * 5}
                      style={service.ready ? {color: "#F8D210"} : {color: "#000000"}}
                    />
                    <span>
                      {service.title}
                    </span>
                    
                  </div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    <Redirect to={`/services/${service.id}`} />
                  </Modal>
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
            id name createdAt username title longitude latitude description starCount ready rates
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
