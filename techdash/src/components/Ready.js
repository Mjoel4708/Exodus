import React from 'react'
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import Switch from "react-switch";
import { usePosition } from "use-position";
function Ready({serviceId, ready}) {
    const {
        latitude,
        longitude,
        
      } = usePosition();
    
    const [state, setState] = React.useState(ready);

    
    
    const [ updateService] = useMutation(UPDATE_SERVICES_MUTATION, {
        update(proxy,results){
            console.log(results)
            console.log(proxy)
        },
        
        
        variables: {
            serviceId: serviceId,
            longitude: longitude,
            latitude: latitude,
            ready: state
            
        }
    })
    const handleChange = () => {
        setState(!state);
        console.log(state)
        setTimeout(updateService, 3000)
        
        
        return state
    }
    
    
    
    
    return (
        <div style={{float: "right"}}>
            <span>Active</span>
            <br />
            <Switch 
                onChange={handleChange} 
                checked={state} 

            />
        </div>
    )
}
const UPDATE_SERVICES_MUTATION = gql`
    mutation updateService(
        $serviceId: ID! 
        $longitude: Float!
        $latitude: Float!
        $ready: Boolean!

    ) {
        updateService(serviceId: $serviceId, longitude: $longitude, latitude: $latitude, ready: $ready){
            id
        }
    }

`
export default Ready
