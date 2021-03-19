import React from 'react'
import { IconButton, Typography } from "@material-ui/core";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Starbutton({ username, id, stars, starCount }) {
    const [starService] = useMutation(STAR_SERVICE_MUTATION, {
        variables: {
            serviceId: id,
            username: username
        }
    })
    console.log(username)
    const [liked, setLiked] = React.useState(false);
    React.useEffect(() => {
        if(stars.find((star) => star.username === username)){
            setLiked(true);
        }else{
            setLiked(false)
        }
    }, [username, stars])
    return (
        <div>
            <IconButton aria-label="add to likes" onClick={starService}>
                <Typography>{starCount}</Typography>
                <FavoriteIcon fontSize="small" style={liked ? {color: "	#FF0000"} : {color: "#FFD700"}} /> 
                            
            </IconButton>
            
        </div>
    )
}
const STAR_SERVICE_MUTATION = gql`
    mutation starService(
        $serviceId: ID!
        $username: String!
    ){
        starService(serviceId: $serviceId, username: $username){
            id
            stars{
                id
                username
            }
            starCount
        }
    }
`;

export default Starbutton
