const serviceResolvers = require("./services");
const userResolvers = require("./users")
const requestResolvers = require("./requests")

module.exports = {
     Service: {
        starCount(parent){
            
            return parent.stars.length;
        },
        requestCount: (parent) => parent.requests.length
     },
     Query: {
         ...serviceResolvers.Query
     },
     Mutation: {
         ...userResolvers.Mutation,
         ...serviceResolvers.Mutation,
        ...requestResolvers.Mutation
     },
     Subscription: {
         ...requestResolvers.Subscription
     }
}