import React from 'react'
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Grid, Paper, Typography, ButtonBase, Container } from "@material-ui/core";
import { Navbar, Footer } from "../";
import Starbutton from "./Starbutton";
import moment from "moment";
function SingleService(props) {
    const serviceId = props.match.params.serviceId;
    console.log(serviceId);
    
    const {
        loading,
        data
      } = useQuery(FETCH_SERVICE_QUERY, {
        variables: {
          serviceId
        }
      });
    
    
    if(loading){
        return <p>Loading service ...</p>
    } else{
        const getService = data.getService
        const { id, description, title, createdAt, username, stars, starCount, requests, requestCount } = getService;
        return(
            <Grid spacing={3} style={{flexGrow: 1}}>
                <Navbar />
                <Paper style={{maxWidth: "500px", padding: "5px", margin: "20px", alignItems: "center"}}>
                    <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase style={{width: 128, height: 128}}>
                          <img style={{display: "block", margin: "auto", maxWidth: "100%", maxHeight: "100%"}} alt="complex" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                            {username}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                            {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                            {description}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                <Starbutton id={id} username={username} stars={stars} starCount={starCount} />
                            </Typography>
                        </Grid>
                        </Grid>
                        <Grid item>
                        <Typography variant="subtitle1">{moment(createdAt).fromNow()}</Typography>
                        </Grid>
                    </Grid>
                    </Grid>
                </Paper>
                <Footer />
            </Grid>
        )
    }
}
const FETCH_SERVICE_QUERY = gql `
    query($serviceId: ID!){
        getService(serviceId: $serviceId){
            id username email location title description createdAt starCount
            stars{
                username
            } 
            requestCount
            requests{
                id username
            }
        }
    }
`

export default SingleService
