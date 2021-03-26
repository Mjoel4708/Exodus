import { formRow } from 'aws-amplify';
import React from 'react'
import { Grid } from "@material-ui/core";
import { Navbar, Footer } from "../";
function SingleCategory(props) {
    const catTitle = props.match.params.title;
    return (
        <div>
            <Navbar />
            <Grid container>
                <Grid item>
                    <h1>{catTitle}</h1>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default SingleCategory
