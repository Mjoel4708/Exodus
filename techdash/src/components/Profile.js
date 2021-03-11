import React from 'react'
import { Container, Jumbotron, Card, Button, Image } from "react-bootstrap";
import { FaUserCircle, FaMapMarkedAlt, FaHardHat, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
function Profile({ userName }) {
    return (
        <div>
            <Jumbotron fluid style={{marginTop: "0.5px", color: "#b08f26", padding: "10%", alignContent: "stretch", justifyContent: "space-around", diplay: "fluid", maxWidth: "auto", height: "auto", backgroundAttachment: "auto", backgroundSize: "cover", backgroundImage: 'url(https://images.pexels.com/photos/3930091/pexels-photo-3930091.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)', backgroundRepeat: "no-repeat", fontFamily: "Oswald, sans-serif"}}>
            <Container flex>
                <h1>My profile</h1>
                
                <p>
                Hi there 
                </p>
                {userName}
            </Container>
            </Jumbotron>
            <Container className="d-flex justify-content-center">
                <Card className="shadow-lg" style={{color: "#b08f26", marginTop: "-50px", width: "800px", zIndex: "1", textAlign: "left" }}>
                <Card.Header>
                    <Image className="text-center  shadow-lg" roundedCircle src="https://semantic-ui.com/images/avatar/large/elliot.jpg" style={{padding: "5px", backgroundColor: "#f6f6f6", width: "150px", height: "150px", marginTop: "-60px"}} />
                    <h5 style={{color: "#b08f26", fontFamily: "Roboto Slab", fontWeight: "800", paddingTop: "20px", paddingBottom: "15px"}}>Christian Louboutin</h5>
                    
                    <h6><FaHardHat /> Interior Designer</h6>
                    <h6><FaMapMarkedAlt /> Location</h6>
                </Card.Header>
                    <Card.Body>
                        <Card.Title>Contact</Card.Title>
                        
                        <Card.Text>
                        
                        Tel, Email, Address
                        </Card.Text>
                        <Card.Title>Qualification</Card.Title>
                        
                        <Card.Text>
                        
                        Certs
                        </Card.Text>
                        <Card.Title>Experience</Card.Title>
                        
                        <Card.Text>
                        
                        Work experience
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </Container>
        </div>
    )
}

export default Profile
