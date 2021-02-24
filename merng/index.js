const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const Service = require("./models/Service")
const { MONGODB } = require("./config.js");

const typeDefs = gql`
    type Service{
        id: ID!
        title: String!
        username: String!
        location: String!
        
    }

    type Query{
        getServices: [Service]
    }

`;
const resolvers = {
    Query: {
        async getServices () {
            try {
                const services = await Service.find();
                return services;
            } catch (error) {
                console.log(error)
            }
        }
    }
    
    
};
const server = new ApolloServer({
    typeDefs,
    resolvers
});
mongoose
    .connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connected");
        return server.listen({ port: 5000 });
    })
    .then(res => {  
        console.log(`Server sunning at ${res.url}`)
    });