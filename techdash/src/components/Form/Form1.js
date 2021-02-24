import React from 'react';
import { useForm } from "react-hook-form";
import { Sidebar, Home } from "../../components"
import { Form, Button, Col, Row } from "react-bootstrap";
function Form1({ loggedIn, setLoggedIn }) {
    const { handleSubmit, register, error } = useForm();
    console.log(loggedIn)
    const onSubmit = (data) => {

        try {
            console.log(data);
            setLoggedIn(false);
        } catch (error) {
            console.log(error);
        }
        
    }
    return loggedIn ? (
        <Row>
            <Col>
            
            </Col>
            
            <Col md={7} className="justify-content-center">
                <h6>Almost there...</h6>
                
                <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstname" placeholder="Joe" ref={register} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastname" placeholder="Doe" ref={register} />
                    </Form.Group>
                </Form.Row>
                
                
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>County</Form.Label>
                    <Form.Control type="text" name="county" ref={register}  />
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>City / Town</Form.Label>
                    <Form.Control as="select" name="city" defaultValue="Choose..." ref={register} >
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>District</Form.Label>
                    <Form.Control type="text" name="district" />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address </Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" name="address" ref={register}  />
                </Form.Group>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Date of Birth </Form.Label>
                    <Form.Control type= "date" name="dob"  ref={register}/>
                </Form.Group>
                <Form.Row>
                    
                    
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" name="age" ref={register({required: true, min: 18, max: 100})} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" defaultValue="Female" name="gender" ref={register} >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        <option>I rather not say</option>
                    </Form.Control>
                    </Form.Group>

                    
                </Form.Row>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address </Form.Label>
                    <Form.Control type="number" name="address"  ref={register}/>
                </Form.Group>
                


                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="I agree to the terms and conditions"ref={register}  />
                </Form.Group>

                <Button variant="primary" type="submit" ref={register}>
                    Submit
                </Button>
                </Form>
            </Col>
            <Col>
            
            </Col>
        </Row>    
    ):
    (
        <Home />
    )
}

export default Form1
