import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';


function Values() {
    return (
        <Container  style={{padding:"20px", textAlign: "center", fontFamily: "Oswald, sans-serif"}}>
            <Row>
                
                <Col>
                    <div>
                        <i className="fas fa-toolbox fa-3x" style={{color: "#F8D210"}}></i>
                        <h6><b>For any type of repair</b></h6>
                        <p>Choose from a huge selection of handymen.</p>
                    </div>
                </Col>
                <span class="border-right"></span>
                <Col>
                    <div>
                    <i className="fas fa-laptop-house fa-3x" style={{color: "#F8D210"}}></i>
                        <h6><b>Available in remote locations</b></h6>
                        <p>We get to match you with the closest handyman near you</p>
                    </div>
                </Col>
                <span class="border-right"></span>
                <Col>
                    <div>
                        <i className="fas fa-star fa-3x" style={{color: "#F8D210"}}></i>
                        <h6><b>Service from the best</b></h6>
                        <p>Use recomendations from other customers know the best service</p>
                    </div>
                </Col>
                <span class="border-right"></span>
                <Col>
                    <div>
                        <i className="fas fa-mobile fa-3x" style={{color: "#F8D210"}}></i>
                        <h6><b> Mobile Optimized</b></h6>
                        <p> Avalible on IOS and Android devices</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Values
