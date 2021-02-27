const serviceResolvers = require("./services");
const userResolvers = require("./users")

module.exports = {
     Query: {
         ...serviceResolvers.Query
     },
     Mutation: {
         ...userResolvers.Mutation
     }
}