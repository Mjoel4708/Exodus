import React from 'react'
import { usePosition } from 'use-position';

function RequestForm() {
    const {
        latitude,
        longitude,
        speed,
        timestamp,
        accuracy,
        error,
      } = usePosition();
    return (
        <div>
            latitude: {latitude}<br/>
            longitude: {longitude}<br/>
            speed: {speed}<br/>
            timestamp: {timestamp}<br/>
            accuracy: {accuracy && `${accuracy}m`}<br/>
            error: {error}
            
        </div>
    )
}

export default RequestForm
