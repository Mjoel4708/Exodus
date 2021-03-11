import React from "react";
import { Grid, Card, CardHeader, Fab, CardContent, Avatar, IconButton, Typography, CardActions, Collapse } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SendIcon from '@material-ui/icons/Send';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from "moment";
import { Row, Col } from "react-bootstrap";
function Cards({service: { id, title, description, location, createdAt, username, starCount, requestCount, stars }}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const img_url = "https://react.semantic-ui.com/images/avatar/large/molly.png";
    return(
        <Grid as={Row} item xs={9} style={{alignItems: 'center'}}>
            <Card as={Col} style={{display: "block", maxWidth: "1245px", flexGrow: 1}}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" style={{backgroundColor: "#F8D210"}}>
                            {username.charAt(0)}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={username}
                    subheader={moment(createdAt).fromNow()}
                />
                
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {title}
                    </Typography>
                </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to likes">
                            <Typography>{starCount}</Typography>
                            <FavoriteIcon fontSize="small" /> 
                            
                        </IconButton>
                        <IconButton aria-label="share">
                            <SendIcon />
                        </IconButton>
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
                                {location}
                        </Typography>
                        <Typography paragraph>
                                {description}
                        </Typography>
                        <Typography paragraph>
                                
                        </Typography>
                        <Typography>
                            
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}
export default Cards