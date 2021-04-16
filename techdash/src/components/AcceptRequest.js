import React from 'react'

import moment from "moment";
import gql from "graphql-tag"
import {useMutation} from "@apollo/react-hooks"
import {Chip, Avatar, DialogTitle, Dialog, DialogActions, DialogContentText, DialogContent, Button} from "@material-ui/core"
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
function AcceptRequest({request, service}) {

    const [open, setOpen] = React.useState(false);
   
    const [status, setStatus] = React.useState(request.status)
    const[updateRequest] = useMutation(UPDATE_REQUEST_MUTATION, {
        update(proxy,results){
            console.log(results)
        },

        variables: {
            serviceId: service.id,
            requestId: request.id,
            status: status
        }
    })
    
    const handleReject = () => {
        const promise = async () => setStatus("rejected") 
        promise().then(updateRequest)
        setOpen(!open)
        
    };

    const handleAccept = () => {
        const promise = async () => setStatus("accepted") 
        promise().then(updateRequest)
        setOpen(!open)
        
    };
    const handleClick = () => {
        setOpen(!open);
    };
    
    return (
        <>
            <Chip
                avatar={<Avatar>{request.username.charAt(0)}</Avatar>}
                variant="outlined"
                label={request.username}
                clickable
                color={status === "rejected" ? "secondary" : "primary"}
                onClick={handleClick}
                style={
                    status === "rejected" ? {borderColor: "#ff0000"} 
                    : status === "accepted" ? {borderColor: "#00ff00"}
                    : {borderColor: "#ffff00"}
                }
                
            />
            <Dialog
                open={open}
                onClose={handleClick}
                
                aria-labelledby="draggable-dialog-title"
                
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    {request.username}
                </DialogTitle>
                <DialogContent>
                <DialogContentText>
                    {request.description}
                    <br />
                    {moment(request.createdAt).fromNow()}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleReject} color="secondary">
                    Reject <CloseIcon />
                </Button>
                <Button onClick={handleAccept} style={{color: "#1bff00"}}>
                    Accept <DoneIcon />
                </Button>
                </DialogActions>
            </Dialog>
      </>
    )
}
const UPDATE_REQUEST_MUTATION = gql`
    mutation updateRequest(
        $serviceId: ID!
        $requestId: ID!
        $status: String!

    ){
        updateRequest(serviceId: $serviceId, requestId: $requestId, status: $status){
            id

        }
    }

`

export default AcceptRequest
