import React from 'react'
import { Container, Button, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Paper, Grid, Typography, AppBar, IconButton, Toolbar } from '@material-ui/core';
import { Link } from "react-router-dom";
import Image from "/home/mjoel4708/Exodus/customer/src/components/Hand-i-man.png";


function Landing() {
   
    return (
        <div style={{padding: "10px", alignContent: "space-around"}}>
            <Navbar fluid>
                
                <Navbar.Brand><img src={Image} width="100px" height="100px" className="img-flex rounded float-center" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav" style={{borderLeft: "1px solid gray"}}>
                    <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/home">Sign in</Nav.Link>
                    <Nav.Link href="#link">Help</Nav.Link>
                    
                    </Nav>
                    
                </Navbar.Collapse>
                
            </Navbar>
            
            
            <Grid item xs={12}>
            
            <Container flex style={{padding: "10px"}} >
                <Grid item xs={6}>
                    <Typography variant="h2">ℍ𝕒𝕟𝕕-i-𝕞𝕒𝕟</Typography>
                    <cite className="text-left">Committed to superior quality and results</cite>
                <Paper elevation={2} className="float-left text-center" style={{ borderRadius: "44px", justifyContent: "space-around", padding: "20px", alignItems: "center"}}>
                    
                    <Typography className="text-left">
                        <blockquote style={{fontFamily: 'Myriad Pro Regular', fontWeight: "10"}}>
                        Reliable and Quality services delivered at your doorstep by expert professionals from Hand-i-man. Hand-i-man aims at providing consistent job opportunities and income to the blue collar professionals in Kenya while solving the myriad of customer demands and everyday problems super efficiently. Whatever you need. Done
                        </blockquote>
                        <Button as={Link} to="/home" variant="warning" size="lg" block>Get Started</Button>
                    </Typography>
                    
                </Paper>
                </Grid>
                <div>
                    <img style={{height: "70vh", padding: "0px", marginBottom: "10px", marginTop: "-100px"}} src="https://thumbs.dreamstime.com/b/handyman-holding-mutiple-tools-handyman-holding-mutiple-tools-cartoon-illustration-can-be-download-vector-format-unlimited-141256833.jpg" className="img-fluid rounded float-right" alt="SVG" />
                </div>
            </Container>
            
            </Grid>
            <Grid>
            <svg style={{marginTop: "-200px"}}  height="100%" width="100%" id="bg-svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
                <defs>
                    <linearGradient id="gradient">
                    <stop offset="5%" stop-color="#f8d21088"></stop>
                    <stop offset="95%" stop-color="#f8d20988"></stop>
                    </linearGradient></defs><path d="M 0,600 C 0,600 0,200 0,200 C 124.30622009569379,176.11483253588517 248.61244019138758,152.22966507177034 334,169 C 419.3875598086124,185.77033492822966 465.8564593301436,243.1961722488038 560,254 C 654.1435406698564,264.8038277511962 795.9617224880383,228.98564593301435 911,223 C 1026.0382775119617,217.01435406698565 1114.2966507177034,240.86124401913875 1198,242 C 1281.7033492822966,243.13875598086125 1360.8516746411483,221.5693779904306 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150"></path><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#f8d210ff"></stop><stop offset="95%" stop-color="#f8d209ff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,400 0,400 C 116,404.47846889952154 232,408.95693779904303 316,400 C 400,391.04306220095697 452,368.65071770334924 533,372 C 614,375.34928229665076 723.9999999999999,404.4401913875598 842,397 C 960.0000000000001,389.5598086124402 1085.9999999999998,345.58851674641147 1187,340 C 1288.0000000000002,334.41148325358853 1364,367.2057416267943 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150"></path>
            </svg>
            </Grid>
            
        </div>
    )
}

export default Landing
