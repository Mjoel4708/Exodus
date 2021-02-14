import React from 'react'
import { Container, Jumbotron, Card, Button, Image } from "react-bootstrap";
import { FaUserCircle, FaMapMarkedAlt, FaHardHat, FaEdit } from "react-icons/fa";
function Profile() {
    return (
        <div>
            <Jumbotron fluid style={{marginTop: "0.5px", color: "#b08f26", padding: "10%", alignContent: "stretch", justifyContent: "space-around", diplay: "fluid", width: "auto", height: "auto", backgroundAttachment: "auto", backgroundSize: "cover", backgroundImage: 'url(https://images.pexels.com/photos/3930091/pexels-photo-3930091.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)', backgroundRepeat: "no-repeat", fontFamily: "Oswald, sans-serif"}}>
            <Container flex>
                <h1>My profile</h1>
                
                <p>
                Hi there Someone...
                </p>
            </Container>
            </Jumbotron>
            <Container className="d-flex justify-content-center">
                <Card className="text-left  shadow-lg" style={{color: "#b08f26", marginTop: "-50px", width: "800px", zIndex: "1" }}>
                <Card.Header>
                    <Image className="text-left  shadow-lg" roundedCircle src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png" style={{padding: "8px", backgroundColor: "#f6f6f6", width: "150px", height: "150px", marginTop: "-60px"}} />
                    <h5 style={{color: "#b08f26", fontFamily: "Roboto Slab", fontWeight: "800", paddingTop: "20px", paddingBottom: "15px"}}>Christian Louboutin</h5>
                    <div className="text-right"><FaEdit /> Edit</div>
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
