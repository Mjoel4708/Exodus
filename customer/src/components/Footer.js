import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { MenuItem, MenuList, Typography } from "@material-ui/core";


function Footer() {
    return (
        <Container fluid style={{background: "linear-gradient(180deg, rgba(254,254,254,1) 0%, rgba(255,235,0,1) 33%, rgba(245,226,6,1) 58%, rgba(248,210,16,1) 88%)", padding: "40px", color: "#000000", alignItems: "center", fontFamily: "Oswald, sans-serif"}} >
            <Row>
                <Col>
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
            
            <Row>
                <Col>
                    <h3>Our Offices</h3>
                    <hr />
                    <p></p>
                </Col>
                <Col>
                    <h3>Say hello</h3>
                    <hr />
                    <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control size="sm" type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control size="sm" as="textarea" rows={5} />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="warning" type="submit">
                                Submit
                            </Button>
                        </Form>
                    
                    
                </Col>
                <Col>
                    <h2>Keep Connected</h2>
                    <hr />
                    <ul style={{listStyle: "none"}}>
                        <li><i class="fa fa-facebook-square" aria-hidden="true"></i> Facebook</li>
                        <li><i class="fa fa-google-plus-square" aria-hidden="true"></i> Google Plus</li>
                        <li><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</li>
                        <li><i class="fa fa-instagram" aria-hidden="true"> Instagram</i></li>
                        
                    </ul>
                </Col>
                
                
            </Row>
            <Row className="justify-content-center" style={{padding: "50px", textAlign: "center"}}>
                <Col>
                    <blockquote> &copy; 2020 Forward Solutions .All rights reserved </blockquote>
                </Col>
                <span class="border-right"></span>
                <Col>
                    <blockquote> Terms and Conditions </blockquote>
                </Col>
                <span class="border-right"></span>
                <Col>
                <blockquote> FAQs </blockquote>
                </Col>
                <span class="border-right"></span>
                <Col>
                <blockquote> Privacy policy </blockquote>
                </Col>
                
                
                
            </Row>
            
            
        </Container>

    )
}

export default Footer
