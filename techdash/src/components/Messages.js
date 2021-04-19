import React from 'react';
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Card, Button, Form, InputGroup, Col, Row, Container} from 'react-bootstrap';
import { FaComments, FaSearch } from 'react-icons/fa';
import { Sidebar, GeoMap } from "../components";
import Myservice from "./Myservice";
import { actionRow } from 'aws-amplify';


function Messages({ userName }) {
    const { loading, error, data={} } = useQuery(FETCH_SERVICES_QUERY);
    
    return (
        <Container fluid className="justify-content-center" style={{padding: "0px"}} >
            <Row style={{display: "flex", height: "30px", backgroundColor: "#1d1d1d"}}>
                
            </Row>
            <Row>
                <Col md={3}>
                    <Sidebar />
                </Col>
                
                <Col md={6}  className="justify-content-center">
                    <Row className="justify-content-center">
                        <Card className="text-left shadow-lg" style={{ background: "#f0f1f2", padding: "0px", marginBottom: "30px"}}>
                            <Card.Body>
                                <Card.Title>Requests <FaComments /></Card.Title>
                                <hr />
                                <Card.Subtitle className="mb-2 text-muted" style={{size: "5px"}}>
                                    
                                </Card.Subtitle>
                                <Card.Text>
                                    <Myservice loading={loading} data={data} userName={userName} />
                                </Card.Text>
                                
                            </Card.Body>
                        </Card> 
                    </Row>
                    <Row>
                        <Col>
                            <GeoMap data={data} userName={userName} loading={loading} error={error} />
                        </Col>
                    
                    </Row>
                </Col>
                
            </Row>
        </Container>
    )
}
const FETCH_SERVICES_QUERY = gql`
    {
        getServices{
            id createdAt username longitude latitude title description starCount
            stars{
                id
                username
            }
            requestCount
            requests{
                id username phoneNumber createdAt description status longitude latitude
            }
        }
    }
`
export default Messages
