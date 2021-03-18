import React from 'react'
import { Container, Paper, CssBaseline, Typography, Avatar } from "@material-ui/core";
import { Navbar, Footer } from "./";
import EditIcon from '@material-ui/icons/Edit';
function Profile() {
    return (
        <div style={{padding: "0px"}}>
          <Container maxWidth="xl" fluid style={{padding: "0px"}}>
            <Navbar />
          </Container> 
          <CssBaseline />
          <Container  maxWidth="sm" style={{marginBottom: "10px"}}>
          
            <Paper display="flex" direction="column" justify="space-around" alignItems="center" elevation={3} component="div" style={{ padding: "30px", backgroundColor: '#F8D210', height: '100vh' }}>
              <Typography variant="h1" component="h2" style={{fontFamily: "Oswald, sans-serif", fontWeight: "bold"}}>
                My Profile
              </Typography>
              <br />
              <Paper maxWidth="xs" elevation={3} style={{ padding: "25px", backgroundColor: '#fffcc4', height: '100vh', marginRight: "-100px", marginBottom: "-190px", marginLeft: "50px", marginTop: "80px" }}>
                
                <Avatar style={{ backgroundColor: "#b4b4b4", marginBottom: "20px"}}>
                  H
                </Avatar>
                <EditIcon style={{float: "right"}} />
                <Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    USERNAME
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    EMAIL
                  </Typography>

                </Typography>
              </Paper>
            </Paper>
          </Container> 
          <br />
          <Container fluid maxWidth="xl" style={{padding: "0px"}}>
           <Footer />
          </Container>  
        </div>
    )
}

export default Profile
