import React from 'react'
import gql from 'graphql-tag'
import moment from "moment"
import Skeleton from '@material-ui/lab/Skeleton';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import PausePresentationIcon from '@material-ui/icons/PausePresentation';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { useQuery } from "@apollo/react-hooks"
import { Card } from "react-bootstrap";
import RequestDeletion from "./RequestDeletion"
function MyRequests({username}) {
    

    const { loading, error, data } = useQuery(FETCH_SERVICES_QUERY)
    if(loading){
        return(
            <div>
                <Skeleton variant="text" />
                
                <Skeleton variant="rect" width={210} height={118} />
            </div>
        )
    }
    if(data){
        const services = data.getServices
        return (
            <div>
                
                {services && services.map((service) => (
                    <div key={service.id}>
                        
                        {
                            service && service.requests.map((request) => (
                                <div key={request.id}>
                                    {request && request.username === username ? (
                                        <div key={request.id}>
                                            <Card style ={{
                                                
                                                
                                                padding : "20px",
                                                margin: "10px",
                                                order: "1px solid #eee",
                                                
                                                boxShadow: "0 2px 2px #ccc"

                                            }}>
                                                <Card.Body style={{padding: "0px"}}>
                                                    <p>Description:  {request.description}</p>
                                                    
                                                    <p>Created: {moment(request.createdAt).fromNow()}</p>
                                                    <p>Status: {request.status} {
                                                        request.status === "rejected" ? <CancelPresentationIcon />
                                                        :request.status === "accepted" ? <CheckBoxIcon />
                                                        : <PausePresentationIcon />
                                                    }</p>
                                                    <RequestDeletion serviceId={service.id} requestId={request.id} />
                                                    
                                                </Card.Body>
                                                
                                            </Card>
                                            
                                        </div>
                                    ) :(
                                        <div>
                                            
                                        </div>
                                    )}
                                  
                                </div>
                            ))
                            
                        }
                    </div>
                ))}
            </div>
        )
    }
}
const FETCH_SERVICES_QUERY = gql`
    {
        getServices{
            id name createdAt username title description rates starCount
            stars{
                id
                username
            }
            requestCount
            requests{
                id username createdAt description status
            }
        }
    }
`

export default MyRequests
