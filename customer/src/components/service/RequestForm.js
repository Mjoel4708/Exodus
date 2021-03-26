import React from 'react'
import { usePosition } from 'use-position';
import { Paper, TextField, Grid, Button } from "@material-ui/core";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useForm } from "react-hook-form";

function RequestForm({ id, username, setOpen }) {
    const {
        latitude,
        longitude,
        speed,
        timestamp,
        accuracy,
        error,
      } = usePosition();
    
    const { register, handleSubmit, errors, watch } = useForm();
    const [value, setValue] = React.useState("");
    const [createRequest] = useMutation(MUTATION_REQUEST_SERVICE, {
        variables: {
            
            serviceId: id,
            username: username,
            latitude: latitude,
            longitude: longitude,
            description: value
        }
    })
    
    const handleChange = (event) => {
        setValue(event.target.value);
      };
    const onSubmit = (data) =>{
        createRequest()
        setOpen(false)
        console.log(data)
    }
    return (
        <Paper elevation={4} style={{width: 300, height: 200, float: "center", textAlign: "center", padding: 30}}>
            <Grid container spacing={2}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid item>
                        <TextField
                            required
                            id="description-textarea"
                            name="description"
                            label="Description"
                            placeholder="describe your request"
                            value={value}
                            multiline
                            rowsMax={5}
                            ref={register}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid>
                        <Button type="submit" onClick={onSubmit} variant="contained" style={{backgroundColor: "#ffc107"}}>
                            Submit
                        </Button>
                    </Grid>
                </form>    
                
            </Grid>
            
            
        </Paper>
    )
}
const MUTATION_REQUEST_SERVICE = gql`
    mutation createRequest(
        $serviceId: String!
        $username: String!
        $description: String!
        $longitude: Float!
        $latitude: Float!

    ){
        createRequest(
            requestInput: {
                serviceId: $serviceId
                username: $username
                description: $description
                longitude: $longitude
                latitude: $latitude
            }
        ){
            id username
        }
    }
`

export default RequestForm
