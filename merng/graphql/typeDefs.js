const { gql } = require('apollo-server');
module.exports = gql`
    type Service{
        id: ID!
        title: String!
        username: String!
        location: String!
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
        token: String!
        createdAt: String!

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
    }
    type Mutation{
        register(registerInput: RegisterInput): User!
        createService(title: String!): Service!
        deleteService(serviceId: ID!): String!
        createRequest(serviceId: ID!, description: String!): Service!
        deleteRequest(serviceId: ID!, requestId: ID!): Service!
        starService(serviceId: ID!): Service!
    }
    type Subscription{
        newRequest: Request!
    }

`;