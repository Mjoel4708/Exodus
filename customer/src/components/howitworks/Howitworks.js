import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap';
function Howitworks() {
    return (
        
        <div>
            <Container  style={{padding:"10px", textAlign: "center", fontFamily: "Oswald, sans-serif"}}>
            <Row className="justify-content-center" style={{paddingBottom:"30px"}}>
                <h1 className="display-4 text-warning" style={{fontFamily: "Oswald, sans-serif"}}>How it works</h1>
            </Row>
            <Row>
                
                <Col>
                    <div>
                        
                        <i className="fas fa-calendar-check fa-3x" style={{color: "#F8D210"}}></i>
                        <h6><b>Book an appointment</b></h6>
                        <p>Our system will list all the available handymen for you to select according to your preferences</p>
                    </div>
                </Col>
                <span class="border-right"></span>
                <Col>
                    <div>
                    <i className="fas fa-search-location fa-3x" style={{color: "#F8D210"}}></i>
                        <h6><b>Handy man comes to you</b> </h6>
                        <p>Your handyman of choice will come to you using your pinned location</p>
                    </div>
                </Col>
                <span class="border-right"></span>
                <Col>
                    <div>
                        <i className="fas fa-tools fa-3x" style={{color: "#F8D210"}}></i>
                        <h6><b>Work is done</b></h6>
                        <p>The handyman you requested gets to work. Hourly rates are used to estimate the handyman's fee. You get to pay after service</p>
                    </div>
                </Col>
                <span class="border-right"></span>
                <Col>
                    <div>
                        <i className="fas fa-star fa-3x" style={{color: "#F8D210"}}></i>
                        <h6> <b>Rate the service</b></h6>
                        <p>Rate the service from a range of 1 to 5 star</p>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center" inline style={{paddingTop: "0px"}}>
                <Button variant="warning" size="lg">Explore</Button>
            </Row>
        </Container>
            
        </div>
    )
}

export default Howitworks
