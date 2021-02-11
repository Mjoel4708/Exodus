import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Profile, Sidebar } from "../components";
function Home() {
    return (
        <Container fluid style={{padding: "0.4px", margin: "0px"}}>
            <Row>
                <Col lg={3}>
                    <Sidebar />
                </Col>
                <Col lg={8}>
                    <Profile />
                </Col>

            </Row>
        </Container>
    )
}

export default Home
