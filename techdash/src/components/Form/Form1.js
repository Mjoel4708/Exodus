import React from 'react';
import { useForm } from "react-hook-form";
import moment from "moment";
import { Sidebar } from "../../components"
import { Form, Button, Col, Row } from "react-bootstrap";
function Form1() {
    const { handleSubmit, register, error } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <Row>
            <Col md={4}>
                <Sidebar />
            </Col>
            <Col md={7}>
                
                <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Joe" ref={register} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" ref={register} />
                    </Form.Group>
                </Form.Row>
                
                
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>County</Form.Label>
                    <Form.Control type="text" />
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>City / Town</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>District</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address </Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Date of Birth </Form.Label>
                    <Form.Control type= "date" />
                </Form.Group>
                <Form.Row>
                    
                    
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" ref={register({required: true, min: 18, max: 100})} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" defaultValue="Female">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        <option>I rather not say</option>
                    </Form.Control>
                    </Form.Group>

                    
                </Form.Row>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address </Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                


                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="I agree to the terms and conditions" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Col>
        </Row>    
    )
}

export default Form1
