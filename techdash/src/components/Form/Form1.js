import React from 'react';
import { useForm } from "react-hook-form";
//graph ql dependacies
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { useQuery } from "@apollo/react-hooks";

import { Home } from "../../components";
import { Form, Button, Col, Row, Spinner } from "react-bootstrap";


import { Paper } from '@material-ui/core';
function Form1({ loggedIn, setLoggedIn, userName, userEmail }) {
    const { handleSubmit, register, error } = useForm();
   
    const [ userVal, setUserVal ] = React.useState({});
    const nameVal = userVal.firstname;
    const locationVal = userVal.address;
    const titleVal = userVal.service;
    const descriptionVal = userVal.firstname;
    const onSubmit = async (data) => {
        
        setUserVal(data);
        try {
            console.log(data);
            setLoggedIn(false);
            
            addService()
            addUser()
            console.log(data.address)
            
            
            
            
            
        } catch (error) {
            console.log(error);
            console.log(error.graphQLErrors)
        }
        
    }
  
    const [ addService, { loading }] = useMutation(REGISTER_SERVICE, {
        update(proxy,results){
            console.log(results)
        },
        
        
        variables: {
            username: userName,
            email: userEmail,
            name: nameVal,
            location: locationVal,
            title: titleVal,
            description: descriptionVal
        }
    })
    const [ addUser ] = useMutation(CREATE_USER_PROFILE, {
        update(proxy,results){
            console.log(results)
        },
        
        
        variables: {
            username: userName,
            email: userEmail,
            name: nameVal,
            location: locationVal,
            
        }
    })

    const { data } = useQuery(FETCH_USER_SERVICES, {
        variables:{
          username: userName
        }
      });
      if(data){
        const userService = data.getUser;
        console.log(userService);
      }
      if(data){
          setLoggedIn(false);
          console.log(data)
      }
    return loggedIn ? (
        <Row style={{backgroundImage: "url(https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)", backgroundSize: "cover"}}>
            <Col>
            
            </Col>
            
            <Col md={8} className="justify-content-center">
                <h6>Almost there...</h6>
                <Paper elevation={3} style={{padding: "15px"}}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                    <h6>Register a service</h6>
                    <br />
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="firstname" placeholder="Joe" ref={register({ required: true })} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastname" placeholder="Doe" ref={register({ required: true })} />
                        </Form.Group>
                    </Form.Row>
                    
                    
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>County</Form.Label>
                        <Form.Control type="text" name="county" ref={register({ required: true })}  />
                        </Form.Group>
                        
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>City / Town</Form.Label>
                        <Form.Control as="select" name="city" defaultValue="Choose..." ref={register({ required: true })} >
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
                        <Form.Control placeholder="Apartment, studio, or floor" name="address" ref={register({ required: true })}  />
                    </Form.Group>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Date of Birth </Form.Label>
                        <Form.Control type= "date" name="dob"  ref={register({ required: true })}/>
                    </Form.Group>
                    <Form.Row>
                        
                        
                        

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select" defaultValue="Female" name="gender" ref={register({ required: true })} >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                            <option>I rather not say</option>
                        </Form.Control>
                        </Form.Group>

                        
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="serviceName">
                        <Form.Label>Service Name</Form.Label>
                        <Form.Control type="text" name="service" ref={register({ required: true })}  />
                        </Form.Group>
                        
                        <Form.Group as={Col} controlId="formGridCategory">
                        <Form.Label>Service Category</Form.Label>
                        <Form.Control as="select" name="cat" defaultValue="Choose..." ref={register({ required: true })} >
                            <option>Constuction</option>
                            <option>Plumber</option>
                            <option>Electritian</option>
                            <option>Computer repair</option>
                            <option>Other</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Your hourly rate</Form.Label>
                        <Form.Control type="text" name="rates" ref={register({ required: true })} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridDescription">
                        <Form.Label>Description </Form.Label>
                        <Form.Control as="textarea" row={3} name="decription"  ref={register({ required: true })}/>
                    </Form.Group>
                    


                    <Form.Group id="formGridCheckbox">
                        <Form.Check name="checkbox" type="checkbox" label="I agree to the terms and conditions"ref={register}  />
                    </Form.Group>

                    <Button name="submit" variant="dark" type="submit" ref={register}>
                        Submit
                    </Button>
                   </Form>
                   
                </Paper>
            </Col>
            <Col>
            
            </Col>
        </Row>    
    ):
    (
        <Home userName={userName} />
    )
}
const REGISTER_SERVICE = gql`
    mutation createService(
        
        $username: String!
        $email: String!
        $name: String!
        $location: String!
        $title: String!
        $description: String!

    ) {
        createService(
            serviceInput: {
                username: $username
                email: $email
                name: $name
                location: $location
                title: $title
                description: $description
            }
        ){
            id
        }
    }
`
const CREATE_USER_PROFILE = gql`
    mutation register(
        $username: String!
        $email: String!
        $name: String!
        $location: String!
    ){
        register(
            registerInput: {
                username: $username
                email: $email
                name: $name
                location: $location
            }
        ){
            id
        }
    }


`
const FETCH_USER_SERVICES = gql`
    query getUser(
      $username: String!
    )
    {
        getUser(
          username: $username
        ){
            id createdAt username name location 
            
        }
    }
`

export default Form1
