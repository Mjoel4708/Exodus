import React from 'react'

import { Chip, Avatar, Divider } from "@material-ui/core";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
function Myservice({ loading, data, userName }) {
    
    
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
                        service.username === userName ? (
                            
                            <div>
                                {service.requestCount} <NotificationsActiveIcon />
                                <br />
                                {service.requests.map((request) => (
                                    <div key={request.id} style={{padding: "3px", float: "left"}}>
                                        
                                        <Chip
                                            avatar={<Avatar>{request.username.charAt(0)}</Avatar>}
                                            label={request.username}
                                            clickable
                                            component=""
                                            style={{ cursor: 'pointer' }} 
                                            onClick={() => alert(`${request.description} from: ${request.username}`)}
                                        
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

export default Myservice
