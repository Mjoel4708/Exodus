import React from 'react'
import { Button, IconButton, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
import gql from "graphql-tag"
import {useMutation} from "@apollo/react-hooks"
function RequestDeletion({serviceId, requestId}) {
    const [deleteRequest] = useMutation(DELETE_REQUEST_MUTATION, {
        variables: {
            serviceId: serviceId,
            requestId: requestId
        }
    })
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        deleteRequest()
        setOpen(false);
    };
    return (
        <div>
            <IconButton onClick={handleClickOpen}  style={{float: "right"}}>
                <DeleteIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"UAre you sure you want to delete?"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Deleting the request will cancel the service.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Disagree
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Agree
                </Button>
                </DialogActions>
            </Dialog>
            
        </div>
    )
}

const DELETE_REQUEST_MUTATION = gql`
    mutation deleteRequest(
        $serviceId: ID!
        $requestId: ID!
    ){
        deleteRequest(serviceId: $serviceId, requestId: $requestId){
            id username
        }
    }
`

export default RequestDeletion
