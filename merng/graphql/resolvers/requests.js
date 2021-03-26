const Service = require("../../models/Service");
const { UserInputError } = require("apollo-server");

module.exports = {
    Mutation: {
        createRequest: async  (_,
             {
                 requestInput: {serviceId, username, description, longitude, latitude}
             },
              context
              ) => {
            if(description.trim() === ""){
                throw new UserInputError("Empty comment", {
                    errors: {
                        description: "Request description must not be empty"
                    }
                }); 
            }
            const service = await Service.findById(serviceId);

            if(service){
                service.requests.unshift({
                    description,
                    username,
                    longitude,
                    latitude,
                    createdAt: new Date().toISOString()
                })
                await service.save();
                context.pubsub.publish("NEW_REQUEST", {
                    newRequest: service
                });
                return service;
            }else throw UserInputError("Service not found")
        },
        async deleteRequest(_, { serviceId, requestId }, context){
            const service = await Service.findById(serviceId);
            if(service){
                const requestIndex = service.requests.findIndex((r) => r.id === requestId);
                service.requests.splice(requestIndex, 1);
                await service.save();
                return service
            }
        }
    },
    Subscription: {
        newRequest: {
            subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("NEW_REQUEST")
        }
    }
}