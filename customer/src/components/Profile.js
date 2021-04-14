import React from 'react'
import { Container, Paper, CssBaseline, Typography, Avatar } from "@material-ui/core";
import { Navbar, Footer } from "./";
import MyRequests from "./MyRequests"
import EditIcon from '@material-ui/icons/Edit';
function Profile({user}) {
    return (
        <div style={{padding: "0px"}}>
          <Container maxWidth="xl" fluid style={{padding: "0px"}}>
            <Navbar />
          </Container> 
          <CssBaseline />
          <Container  maxWidth="sm" style={{ marginBottom: "10px", height: '100vh'}}>
          
            <Paper display="flex" direction="column" justify="space-around" alignItems="center" elevation={3} component="div" style={{  padding: "15px", border: "1px solid #eee", backgroundImage: 'url(https://images.unsplash.com/photo-1602108987428-4768d7c7ecbe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8eWVsbG93fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)', backgroundSize: "cover", height: '100vh' }}>
              <Typography gutterBottom variant="h5" component="h3" style={{fontFamily: "Oswald, sans-serif", fontWeight: "bold"}}>
                <Avatar  style={{ backgroundColor: "#000000"}}>
                  {user.username.charAt(0)}
                </Avatar>
                {user.username}
                <br />
                {user.attributes.email}
              </Typography>
              
              
              
                    
                
              <Paper maxWidth="sm" elevation={3} style={{  padding: "25px", backgroundColor: '#fffcc4', height: '100vh', marginRight: "-100px", marginBottom: "-190px", marginLeft: "50px", marginTop: "30px" }}>
                <p>Requests</p>
                
                
                
                <MyRequests username={user.username} />
              </Paper>
            </Paper>
          </Container> 
          <br />
          <Container fluid maxWidth="xl" style={{padding: "0px", marginTop: "40px"}}>
           <Footer />
          </Container>  
        </div>
    )
}

export default Profile
