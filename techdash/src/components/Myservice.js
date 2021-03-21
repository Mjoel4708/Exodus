import React from 'react'
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Chip, Avatar, Divider } from "@material-ui/core";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
function Myservice() {
    const [ serviceId, setServiceId ] = React.useState()
    const { loading, error, data={} } = useQuery(FETCH_SERVICES_QUERY);
    if(loading){
        return(
            <h3>Loading...</h3>
        )
    }
    
    if(data){
        
        
        const services = data.getServices;
        return(
            services.map((service) => (
                <div key={service.id}>
                    {
                        service.username === "orwa" ? (
                            <div>
                                <span style={{float: "right"}}>{service.requestCount} <NotificationsActiveIcon /> </span>
                                <br />
                                {service.requests.map((request) => (
                                    <div key={request.id} style={{padding: "3px", float: "left"}}>
                                        
                                        <Chip
                                            avatar={<Avatar>{request.username.charAt(0)}</Avatar>}
                                            label={request.username}
                                            clickable
                                            component=""
                                            color="primary"
                                        
                                        />
                                        
                                        
                                    </div>
                                ))}

                                
                            </div>
                        ): ""
                    }
                </div>
                
            ))
        )
    }    
}
const FETCH_SERVICES_QUERY = gql`
    {
        getServices{
            id createdAt username title location description starCount
            stars{
                id
                username
            }
            requestCount
            requests{
                id username createdAt description
            }
        }
    }
`
export default Myservice
