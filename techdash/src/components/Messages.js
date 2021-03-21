import React from 'react'
import { Card, Button, Form, InputGroup, Col, Row} from 'react-bootstrap';
import { FaComments, FaSearch } from 'react-icons/fa';
import { Sidebar } from "../components";
import Myservice from "./Myservice";
function Messages() {
    
    return (
        <Row fluid="md">
            <Col md={3}>
                <Sidebar />
            </Col>
            
            <Col  md={7}>
                
                <Card className="text-center shadow-lg" style={{ background: "#f0f1f2", padding: "8px" }}>
                    <Card.Body>
                        <Card.Title>Requests <FaComments /></Card.Title>
                        <hr />
                        <Card.Subtitle className="mb-2 text-muted" style={{size: "5px"}}>
                            
                        </Card.Subtitle>
                        <Card.Text>
                            <Myservice />
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card> 
            </Col>
        </Row>
    )
}

export default Messages
