import React from 'react';
import { Col, Card, Container, Row } from "react-bootstrap";
import Calendar from 'react-calendar';
import { MdEventAvailable } from "react-icons/md"
import {  Sidebar } from "../components";
import 'react-calendar/dist/Calendar.css';
function Events() {
    var CLIENT_ID = "1013320439570-nefmco22um2dlr0vi5efqo0hktgvvavp.apps.googleusercontent.com";
      var API_KEY = "AIzaSyDw_HGhGTEYnIt7K_bSWkGklXzJK-q8KZE";
      var gapi = window.gapi
      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

      var authorizeButton = document.getElementById('authorize_button');
      var signoutButton = document.getElementById('signout_button');
      
      const handleClick = () => {
        gapi.load('client:auth2', () => {
          console.log('loaded client')
    
          gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
          })
    
          gapi.client.load('calendar', 'v3', () => console.log('bam!'))
    
          gapi.auth2.getAuthInstance().signIn()
          /*

          })*/
        })
        
      }

      /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
      

      /**
       *  Sign in the user upon button click.
       */
      
    return (
        <div style={{width: "auto", size: "auto"}}>
            <Container fluid style={{padding: "0.4px", margin: "0px"}}>
            <Row>
                <Col lg={3}>
                    <Sidebar />
                </Col>
                <Col lg={8}>
                    <Card className="text-center  shadow-lg">
                        <Calendar />
                        <button onClick={handleClick}> <MdEventAvailable /> Add Event</button>
                    </Card>
                </Col>

            </Row>
        </Container>
            
            
        </div>
    )
}

export default Events
