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
            }
        },
        async getService(_, { serviceId }){
            try {
                const service = await Service.findById(serviceId);
                if(service){
                    return service;
                } else {
                    throw new Error("Post not found")
                }
            } catch (error) {
                throw new Error("Post not found");
            }
        }
    },
    Mutation: {
        async createService(_, { title }, context, info){
            if(args.title.trim() === ""){
                throw new Error("post body must not be empty");
            }
            const newService = new Service({
                title,
                username: "test",
                location: "test",
                createdAt: new Date().toISOString()
            });
            const service = await newService.save();
            return service;
            
        },
        async deleteService(_, { serviceId }, context){
            try {
                const post = await service.findById(serviceId);
                if ( user.username === service.username) {
                    await post.delete();
                    return "Post deleted succesfully";

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