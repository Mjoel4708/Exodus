import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Profile, Sidebar } from "../components";

function Home({ userName }) {
    return (
        <Container fluid className="justify-content-center" style={{padding: "0.4px", margin: "0px", background: "linear-gradient(270deg, rgba(88,86,86,1) 0%, rgba(77,77,77,1) 39%, rgba(29,29,29,1) 74%)"}}>
            <Row style={{display: "flex", height: "30px", backgroundColor: "#1d1d1d"}} />
            <Row>
                <Col md={2}>
                    
                    <Sidebar />
                </Col>
                
                <Col>
                    <Profile userName={userName} />
                </Col>

            </Row>
        </Container>
    )
}

export default Home
