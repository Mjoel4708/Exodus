import React from "react";
//UI 
import { Grid, Typography, } from "@material-ui/core";

//server

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { Navbar, Footer } from "..";
import Cards  from "./Cards";
function Services() {
    
    
    const {loading, error, data } = useQuery(FETCH_SERVICES_QUERY);
    
    if (loading) return <h4>Loading...</h4>;
    if (error) return <h1>Error</h1>;
    else{ 
        const services = data.getServices
    
    
        return(
            <Grid container  justify="center" alignItems="center" spacing={2}>
                <Grid item xs={12} spacing={3}>
                    <Navbar />
                </Grid>
                
                <Grid item xs={10} spacing={3}>
                    <Typography variant="h4" component="h5" style={{display: "block", textAlign: "center", fontSize: "2rem", margin: "10px"}}>
                        Services
                    </Typography>
                {loading ? (
                    <h4>Loading ...</h4>
                ) : (
                services &&
                services.map((service) => (
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                     key={service.id} 
                     spacing={3}
                     
                     >
                        <Cards service={service}/> 
                    </Grid>
                ))
                    
                )}
                </Grid>
                <Grid item xs={12} spacing={3}>
                    <Footer />
                </Grid>
            </Grid>
        )
    };
}

const FETCH_SERVICES_QUERY = gql`
    {
        getServices{
            id createdAt username title location description starCount
            stars{
                id
                username
            }
            requestCount
            requests{
                id createdAt description
            }
        }
    }
`
export default Services