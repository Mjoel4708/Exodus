import React from 'react';
import { useForm } from "react-hook-form";
//graph ql dependacies
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { useQuery } from "@apollo/react-hooks";
import { usePosition } from "use-position";
import { Redirect } from "react-router-dom";

import { Home } from "../../components";
import { Form, Button, Col, Row } from "react-bootstrap";


import { Paper } from '@material-ui/core';
function Form1({ loggedIn, setLoggedIn, userName, userEmail }) {
    const {
        latitude,
        longitude,
        speed,
        timestamp,
        accuracy,
        error,
      } = usePosition();
      //latitude is undefined
    const { handleSubmit, register } = useForm();
   
    const [ userVal, setUserVal ] = React.useState({});
    const nameVal = userVal.firstname;
    //nameVal may have some problems...
    const titleVal = userVal.service;
    const catVal = userVal.cat;
    const descriptionVal = userVal.decription;
    const ratesVal = parseInt(userVal.rates);
    const latitudeVal = latitude;
    const longitudeVal = longitude;
    console.log(longitudeVal)
    const onSubmit = data => {
        
        setUserVal(data);
        try {
            console.log(data);
            console.log(userVal);
            
            
            addService()
            addUser()
            
            
            
            
            
            
        } catch (error) {
            console.log(error)
            console.log(error.graphQLErrors)
        }
        
    }
  
    const [ addService, { loading }] = useMutation(REGISTER_SERVICE, {
        update(proxy,results){
            console.log(results)
            console.log(proxy)
        },
        
        
        variables: {
            username: userName,
            email: userEmail,
            name: nameVal,
            latitude: latitudeVal,
            longitude: longitudeVal,
            category: catVal,
            title: titleVal,
            rates: ratesVal,
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
            latitude: latitudeVal,
            longitude: longitudeVal,
            
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
                <Paper elevation={3} style={{padding: "35px"}}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                    <h6>Register a service</h6>
                    <br />
                    
                        <Form.Group controlId="formGridEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="firstname" 
                                placeholder="Joe" 
                                ref={register({ required: true })} 
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="lastname" 
                                placeholder="Doe" 
                                ref={register({ required: true })} 
                            />
                        </Form.Group>
                    
                    
                    
                    
                    
                    
                    
                        <Form.Group  controlId="serviceName">
                            <Form.Label>Service Name</Form.Label>
                            <Form.Control type="text" name="service" ref={register({ required: true })}  />
                        </Form.Group>
                        
                        <Form.Group  controlId="formGridCategory">
                        <Form.Label>Service Category</Form.Label>
                        <Form.Control as="select" name="cat" defaultValue="Choose..." ref={register({ required: true })} >
                            <option>Constuction</option>
                            <option>Plumber</option>
                            <option>Electritian</option>
                            <option>Computer repair</option>
                            <option>Landscaping</option>
                            <option>Wood work</option>
                            <option>Gardening</option>
                            <option>Mechanic</option>
                            <option>Welding</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group  controlId="formGridZip">
                        <Form.Label>Your hourly rate in KSH</Form.Label>
                        <Form.Control type="number" name="rates" ref={register({ required: true })} />
                        </Form.Group>
                    

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
        <Redirect push to="/" />
    )
}
const REGISTER_SERVICE = gql`
    mutation createService(
        
        $username: String!
        $email: String!
        $name: String!
        $latitude: Float!
        $longitude: Float!
        $category: String!
        $title: String!
        $rates: Int!
        $description: String!

    ) {
        createService(
            serviceInput: {
                username: $username
                email: $email
                name: $name
                latitude: $latitude
                longitude: $longitude
                category: $category
                title: $title
                rates: $rates
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
        $latitude: Float!
        $longitude: Float!
    ){
        register(
            registerInput: {
                username: $username
                email: $email
                name: $name
                latitude: $latitude
                longitude: $longitude
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
            id createdAt username name 
            
        }
    }
`

export default Form1
