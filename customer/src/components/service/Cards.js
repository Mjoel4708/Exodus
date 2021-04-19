import React from "react";
import { Grid, Card, CardHeader, Modal, CardContent, Avatar, IconButton, Typography, CardActions, Collapse } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SendIcon from '@material-ui/icons/Send';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from "moment";
import { Link } from "react-router-dom"
import { Row, Col } from "react-bootstrap";
import Starbutton from "./Starbutton";
import RequestForm from "./RequestForm";
function Cards({service: { id, title, description, name, createdAt, username, rates, starCount, requestCount, stars }, user}) {
    const [expanded, setExpanded] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleOnclick = () => {
        setOpen(true)
    };
    const handleOnclose = () => {
        setOpen(false)
    };
    const body = (
        <Grid container direction="column" justify="center" alignItems="center" xs={12} style={{ padding: 90 }}>
            <RequestForm id={id} username={user.username} setOpen={setOpen} user={user} />
        </Grid>
        
    );
    

    const img_url = "https://react.semantic-ui.com/images/avatar/large/molly.png";
    return(
        <Row  style={{alignItems: 'center', margin: "2px", padding: "5px"}}>
            <Card  style={{display: "block", maxWidth: "1245px", flexGrow: 1, width: '38rem'}}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" style={{backgroundColor: "#F8D210"}}>
                            {username.charAt(0)}
                        </Avatar>
                    }
                    action={
                        <IconButton >
                            <Link to={`/services/${id}`} style={{color: "#000000"}}><MoreVertIcon /></Link>
                        </IconButton>
                    }
                    title={username}
                    subheader={name}
                />
                
                <CardContent>
                    <Typography variant="body1" color="textPrimary" component="h1">
                        {title}
                    </Typography>
                </CardContent>
                    <CardActions disableSpacing>
                        <Starbutton id={id} username={user.username} stars={stars} starCount={starCount} />
                        <IconButton aria-label="share">
                            <SendIcon onClick={handleOnclick} />
                        </IconButton>
                        <Modal
                            open={open}
                            onClose={handleOnclose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            
                        >
                            {body}
                        </Modal>
                        <IconButton
                            
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Description:</Typography>
                        
                        <Typography paragraph>
                                {description}
                        </Typography>
                        <Typography paragraph>
                                Rate per hour in KSH: {rates}
                                <br />
                        </Typography>
                        <Typography paragraph>
                                Created: {moment(createdAt).fromNow()}
                        </Typography>
                        <Typography>
                            
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Row>
    )
}
export default Cards