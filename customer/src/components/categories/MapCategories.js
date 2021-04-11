import React from 'react'
import Cards from "../service/Cards"
function MapCategories({services, catTitle}) {
    console.log(services)
    return (
        <div>
            
            {services.map((service) => (
                <div key={service.id}>
                    {
                        service.category === catTitle ? (
                            <div>
                                <Cards service={service} />
                            </div>
                        ):(
                           ""
                        )
                    }
                </div>
            ))}
        </div>
    )
}

export default MapCategories
