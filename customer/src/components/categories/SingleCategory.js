import { formRow } from 'aws-amplify';
import React from 'react'
import { Grid } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Navbar, Footer } from "../";
import MapCategories from "./MapCategories"
function SingleCategory(props) {
    const { loading, error, data={} } = useQuery(FETCH_SERVICES_QUERY);
    const catTitle = props.match.params.title;
    if(!data){
        return <h1>Loading....</h1>
    }
    else{
        const services = data.getServices
        
        return (
            <div>
                <Navbar />
                <Grid container spacing={3} justify="center" alignItems="center">
                    <Grid item style={{alignItems:"center"}}>
                        <h1>{catTitle}</h1>
                        {
                            services ?
                            <MapCategories services={services} catTitle={catTitle}/>
                            : "Loading...."
                        }
                    </Grid>
                    
                </Grid>
                <Footer />
            </div>
        )
    }
}
const FETCH_SERVICES_QUERY = gql`
    {
        getServices{
            id createdAt username title description category starCount
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

export default SingleCategory
