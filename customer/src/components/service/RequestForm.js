import React from 'react'
import { usePosition } from 'use-position';
import { Paper, TextField, Grid, Button } from "@material-ui/core";
function RequestForm() {
    const {
        latitude,
        longitude,
        speed,
        timestamp,
        accuracy,
        error,
      } = usePosition();
    return (
        <Paper elevation={4} style={{width: 300, height: 200, float: "center", textAlign: "center", padding: 30}}>
            <Grid container spacing={2}>
                <Grid item>
                    <TextField
                    id="standard-textarea"
                    label="Description"
                    placeholder="Write your description here"
                    multiline
                    />
                </Grid>

                <Grid>
                    <Button variant="contained" color="#dbb901">
                        Submit
                    </Button>
                </Grid>
                
            </Grid>
            
            
        </Paper>
    )
}

export default RequestForm
