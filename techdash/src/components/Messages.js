import React from 'react'
import { Card, Button, Form, InputGroup, Col} from 'react-bootstrap';
import { FaComments, FaSearch } from 'react-icons/fa';
import { Sidebar } from "../components";
function Messages() {
    const [user, setUser] = React.useState();
    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <div>
                <Sidebar />
            </div>
            
            <div>
            <Card className="text-left  shadow-lg" style={{ width: '250px', background: "#f0f1f2", position: "absolute", padding: "8px", margin: "7px" }}>
                <Card.Body>
                    <Card.Title>Messages <FaComments /></Card.Title>
                    <hr />
                    <Card.Subtitle className="mb-2 text-muted" style={{size: "5px"}}>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text  className="btn">
                                            <FaSearch />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search here.."
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                    </Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card> 
            </div>
        </div>
    )
}

export default Messages
