import React from "react";
//UI 
import { Grid, Typography, } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
//server

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import RequestForm from "./RequestForm";
import { Navbar, Footer } from "..";
import Cards  from "./Cards";
function Services() {
    
    
    const { loading, error, data={} } = useQuery(FETCH_SERVICES_QUERY);
    
    if (loading) return <h4>Loading...</h4>;
    if (error) return <h4>Error. Couldn't find services {error}</h4>;
    else{ 
        
        const services = data.getServices
    
        return(
            <Grid container  justify="center" alignItems="center" spacing={1}>
                <Grid item xs={12} spacing={3}>
                    <Navbar />
                    <Typography variant="h4" component="h5" style={{display: "block", textAlign: "center", fontSize: "2rem", margin: "10px"}}>
                        Services
                    </Typography>
                </Grid>
                
                <Col style={{padding: "10px"}}>
                    
                {loading ? (
                    <h4>Loading ...</h4>
                ) : (
                services &&
                services.map((service) => (
                    <Col
                    fluid
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                     key={service.id} 
                     md={4}
                     
                     >
                        <Cards service={service}/> 
                    </Col>
                ))
                    
                )}
                </Col>
                
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