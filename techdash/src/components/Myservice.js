import React from 'react'


import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AcceptRequest from "./AcceptRequest";
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
                                {service.requestCount} <NotificationsActiveIcon style={{float: "left"}}></NotificationsActiveIcon>
                                <br />
                                {service.requests.map((request) => (
                                    <div key={request.id} style={{padding: "3px", float: "left"}}>
                                        
                                        
                                        <AcceptRequest request={request} service={service} />
                                        
                                        
                                        
                                        
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
