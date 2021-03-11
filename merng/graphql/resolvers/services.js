const { UserInputError } = require("apollo-server");
const { argsToArgsConfig } = require("graphql/type/definition");
const Service = require("../../models/Service");
const username = "TODO get username";
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
                throw new Error("Post not found");
            }
        }
    },
    Mutation: {
        async createService(
            _,
            { 
                serviceInput: { username, email, name, location, title, description }
            },
            context,
            info
        ){
            
            const newService = new Service({
                
                username,
                email,
                name,
                location,
                title,
                description,
                createdAt: new Date().toISOString()
            });
            const service = await newService.save();
            return service;
            
        },
        async deleteService(_, { serviceId }, context){
            try {
                const service = await service.findById(serviceId);
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
        async starService(_, { serviceId }, context){
            const service = await Service.findById(serviceId);
            if(service){
              if(service.stars.find(star => star.username === username)){
                //service already liked. Unlike 
                service.stars = service.stars.filter(star => star.username !== username);
                

              }else{
                  //not stared
                  service.stars.push({
                      username,
                      createdAt: new Date().toISOString()
                  })
              }
              await service.save();
              return service;
            }else throw new UserInputError("Service not found");
        }
    }
    
    
}