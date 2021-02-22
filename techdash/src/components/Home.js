import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Profile, Sidebar } from "../components";

function Home() {
    return (
        <Container fluid style={{padding: "0.4px", margin: "0px", background: "linear-gradient(270deg, rgba(88,86,86,1) 0%, rgba(77,77,77,1) 39%, rgba(29,29,29,1) 74%)"}}>
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
