import { React, UseState } from 'react'
import { Jumbotron, Container, Navbar, Form, FormControl, NavDropdown, Nav, Button, Row, Col, ButtonGroup } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Image from "/home/mjoel4708/Exodus/customer/src/components/Hand-i-man.png";
import Amplify, { Auth } from 'aws-amplify';
function signOut() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
function NavBar() {
   
    return (
        <Jumbotron fluid style={{paddingTop: "10px", height: "auto", backgroundAttachment: "auto", backgroundSize: "cover", backgroundImage: 'url(https://media.istockphoto.com/photos/tools-picture-id1127248954?b=1&k=6&m=1127248954&s=170667a&w=0&h=GxZdN6TNfUYTVzF4Y-yFH3p4dfKg-RPEFuxImwYh2es=)', backgroundRepeat: "no-repeat", fontFamily: "Oswald, sans-serif"}}>
            <Container>
                <Row xs={"auto"} sm={7} md={10} sm={12}>
                    <Col lg={10} sm={5} md={9}>
                        <Navbar expand="lg" variant="dark">
                        <Navbar.Brand as={Link} to="/home"><img src={Image} width="100px" height="100px" className="img-flex rounded float-center" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            
                            
                            
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <NavDropdown title="Quick access" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={signOut}>Log Out</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/profile">My Account</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Contact us</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                            
                        </Navbar.Collapse>
                        </Navbar>
                        

                    </Col>
                    <Col>
                    
                        
        
                    
                    </Col>
                    
                </Row>
                <Row className="justify-content-center" style={{paddingTop: "170px"}}>
                    <h1 style={{color: "#FFFFFF"}} variant="dark">ℍ𝕒𝕟𝕕-i-𝕞𝕒𝕟</h1>
                </Row>
                
                <Row flex className="justify-content-center">
                    <Form inline style={{paddingTop: "30px", opacity: 0.7}}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="warning">Search</Button>       
                     </Form>
                    
                    
                </Row>
                <Row className="justify-content-center" style={{paddingTop: "10px"}}>
                    <Button variant="warning" size="lg" as={Link} to="/map">Explore</Button>
                </Row>
            </Container>
            
        </Jumbotron>
    )
    
}

export default NavBar
