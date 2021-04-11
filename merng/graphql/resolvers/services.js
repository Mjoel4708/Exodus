const { UserInputError } = require("apollo-server");
const { argsToArgsConfig } = require("graphql/type/definition");
const Service = require("../../models/Service");

module.exports = {
    Query: {
        async getServices () {
            try {
                const services = await Service.find();
                return services;
            } catch (error) {
                console.log(error)
                throw new Error("Service not found")
            }
        },
        async getService(_, { serviceId }){
            try {
                const service = await Service.findById(serviceId);
                if(service){
                    return service;
                } else {
                    throw new Error("Service not found")
                }
            } catch (error) {
                throw new Error("service not found");
            }
        }
    },
    Mutation: {
        async createService(
            _,
            { 
                serviceInput: { username, email, name, latitude, longitude, category, title, description, rates }
            },
            context,
            info
        ){  
            const user1 = await Service.findOne({ username });
            if (user1) {
                

                throw new UserInputError("Username is taken", {
                    errors: {
                        username: "This username is taken"
                    }
                })
            }
            
            const newService = new Service({
                
                username,
                email,
                name,
                latitude,
                longitude,
                category,
                title,
                description,
                rates,
                ready: false,
                createdAt: new Date().toISOString()
            });
            const service = await newService.save();
            return service;
            
        },
        async updateService(_, { serviceId, longitude, latitude, ready }, context){
            try {
                const service = await Service.findById(serviceId);
                if (service) {
                    service.longitude = longitude;
                    service.latitude = latitude;
                    service.ready = ready;
                    await service.save();
                    return service;

                }
                else {
                    throw new Error("Action denied");
                }
            } catch (error) {
                throw new Error(error);
            }
        },
        async deleteService(_, { serviceId }, context){
            try {
                const service = await Service.findById(serviceId);
                if ( user.username === service.username) {
                    await service.delete();
                    return "Service deleted succesfully";

                }
                else {
                    throw new Error("Action denied");
                }
            } catch (error) {
                throw new Error(error);
            }
        },
        async starService  (_, { serviceId, username }, context){
            const service = await Service.findById(serviceId);
            if (service) {
                if (service.stars.find((star) => star.username === username)) {
                // service already stars, unstar it
                service.stars = service.stars.filter((star) => star.username !== username);
                } else {
                // Not stard, star service
                service.stars.push({
                    username,
                    createdAt: new Date().toISOString()
                });
                }

                await service.save();
                return service;
            } else throw new UserInputError('service not found');
        }
        
    }
    
    
}