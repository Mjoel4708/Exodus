const { gql } = require('apollo-server');
module.exports = gql`
    type Service{
        id: ID!
        username: String!
        email: String!
        location: String!
        title: String!
        description: String!
        createdAt: String!
        requests: [Request]!
        stars: [Star]!
        starCount: Int!
        requestCount: Int! 
    }
    type Request{
       id: ID!
       createdAt: String!
       username: String!
       description: String!
    }
    type Star{
       id: ID!
       createdAt: String!
       username: String! 
    }
    type User{
        id: ID!
        username: String!
        name: String!
        location: String!
        email: String!
        createdAt: String!

    }
    input ServiceInput{
        username: String!
        email: String!
        name: String!
        location: String!
        title: String!
        description: String!

    }
    input RegisterInput{
        username: String!
        name: String!
        location: String!
        email: String!

    }
    type Query{
        getServices: [Service]
        getService(serviceId: ID!): Service
        getUser(username: String!): User
    }
    type Mutation{
        register(registerInput: RegisterInput): User!
        
        createService(serviceInput: ServiceInput): Service!
        deleteService(serviceId: ID!): String!
        createRequest(serviceId: ID!, description: String!): Service!
        deleteRequest(serviceId: ID!, requestId: ID!): Service!
        starService(serviceId: ID!, username: String!): Service!
    }
    type Subscription{
        newRequest: Request!
    }

`;