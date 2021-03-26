import React from 'react';
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Card, Button, Form, InputGroup, Col, Row, Container} from 'react-bootstrap';
import { FaComments, FaSearch } from 'react-icons/fa';
import { Sidebar, GeoMap } from "../components";
import Myservice from "./Myservice";


function Messages({ userName }) {
    const { loading, error, data={} } = useQuery(FETCH_SERVICES_QUERY);
    
    return (
        <Row fluid="md">
            <Col md={3}>
                <Sidebar />
            </Col>
            
            <Container fluid as={Col}  md={7} className="justify-content-md-center">
                <Row>
                    <Card className="text-left shadow-lg" style={{ background: "#f0f1f2", padding: "8px", width: '180rem'}}>
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
                    <Col md={{ span: 6, offset: 3 }} md={7}>
                        <GeoMap data={data} userName={userName} loading={loading} error={error} />
                    </Col>
                   
                </Row>
            </Container>
            
        </Row>
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
                id username createdAt description longitude latitude
            }
        }
    }
`
export default Messages
