import React from 'react'
import { IconButton, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
function Starbutton() {
    return (
        <div>
            <IconButton aria-label="add to likes">
                <Typography>{starCount}</Typography>
                <FavoriteIcon fontSize="small" /> 
                            
            </IconButton>
            
        </div>
    )
}

export default Starbutton
