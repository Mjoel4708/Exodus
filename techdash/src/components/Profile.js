import React from 'react'
import { Container, Jumbotron, Card, Button, Image } from "react-bootstrap";
import { FaUserCircle, FaMapMarkedAlt, FaHardHat } from "react-icons/fa";
function Profile() {
    return (
        <div>
            <Jumbotron fluid style={{width: "auto", height: "auto", backgroundAttachment: "auto", backgroundSize: "cover", backgroundImage: 'url(https://images.unsplash.com/photo-1481305717251-830ac10fb6e6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHBhdHRlcm5zfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)', backgroundRepeat: "no-repeat", fontFamily: "Oswald, sans-serif"}}>
            <Container>
                <h1>My profile</h1>
                
                <p>
                Hi there Someone...
                </p>
            </Container>
            </Jumbotron>
            <Container className="d-flex justify-content-center">
                <Card className="text-left  shadow-lg" style={{marginTop: "-50px", width: "800px", zIndex: "1" }}>
                <Card.Header>
                    <Image className="text-left  shadow-lg" roundedCircle src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png" style={{padding: "8px", backgroundColor: "#f6f6f6", width: "150px", height: "150px", marginTop: "-60px"}} />
                    <h5 style={{color: "#3C4858", fontFamily: "Roboto Slab", fontWeight: "800", paddingTop: "20px", paddingBottom: "15px"}}>Christian Louboutin</h5>
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
