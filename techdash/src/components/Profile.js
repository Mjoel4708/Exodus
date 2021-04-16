import React from 'react'
import { Container, Jumbotron, Card, Button, Image } from "react-bootstrap";
import { FaUserCircle, FaMapMarkedAlt, FaHardHat, FaEdit } from "react-icons/fa";

import { Link } from "react-router-dom";
import moment from "moment";
import gql from "graphql-tag";
import { Ready } from "./";
import { useQuery } from "@apollo/react-hooks";

function Profile({ userName }) {
    
    const { loading, error, data={} } = useQuery(FETCH_SERVICES_QUERY);
   
    
    
      if(loading)<h3>Loading...</h3>;
      if(error)console.log(error);
      else{
        
        const services = data.getServices
        
        
      
        return (
            
            <div>
                {services && services.map((service) => (
                    <div key={service.id}>
                        {service.username === userName ? 
                            (   
                                <div>
                                
                                <Jumbotron fluid style={{marginTop: "0.5px", color: "#b08f26", padding: "10%", alignContent: "stretch", justifyContent: "space-around", diplay: "fluid", maxWidth: "auto", height: "auto", backgroundAttachment: "auto", backgroundSize: "cover", backgroundImage: 'url(https://images.pexels.com/photos/3930091/pexels-photo-3930091.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)', backgroundRepeat: "no-repeat", fontFamily: "Oswald, sans-serif"}}>
                                    <Container flex>
                                        <h1>My profile</h1>
                                        
                                        <p>
                                        Hi there <br /> 
                                        {service.username}
                                        </p>
                                        
                                    </Container>
                                </Jumbotron>
                                
                                <Container className="d-flex justify-content-center">
                                    <Card className="shadow-lg" style={{color: "#b08f26", marginTop: "-50px", width: "800px", zIndex: "1", textAlign: "left" }}>
                                    <Card.Header>
                                        <Image className="text-center  shadow-lg" roundedCircle src="https://semantic-ui.com/images/avatar/large/elliot.jpg" style={{border: "1px solid #eee", padding: "5px", backgroundColor: "#f6f6f6", width: "150px", height: "150px", marginTop: "-60px"}} />
                                        
                                        <h5 style={{color: "#b08f26", fontFamily: "Roboto Slab", fontWeight: "800", paddingTop: "20px", paddingBottom: "15px"}}>{service.name}</h5>
                                        <span>
                                            <Ready style={{float: "right"}} serviceId={service.id} ready={service.ready}/>
                                        </span>
                                        <h6><FaHardHat /><br /> {service.title}</h6>
                                        
                                    </Card.Header>
                                        <Card.Body>
                                            <Card.Title>Contact</Card.Title>
                                            
                                            <Card.Text>
                                            
                                            {service.email}
                                            </Card.Text>
                                            <Card.Title>Qualification</Card.Title>
                                            
                                            <Card.Text>
                                            
                                            Certs
                                            </Card.Text>
                                            <Card.Title>Experience</Card.Title>
                                            
                                            <Card.Text>
                                            
                                            Work experience
                                            </Card.Text>
                                            
                                        </Card.Body>
                                        <Card.Footer className="text-muted">{moment(service.createdAt).fromNow()}</Card.Footer>
                                    </Card>
                                </Container>
                                </div>

                            ): ""
                        }
                    </div>
                ))}
            </div>
        )
    }
    
}

const FETCH_SERVICES_QUERY = gql`
    {
        getServices{
            id name title email createdAt username title description starCount ready
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


export default Profile
