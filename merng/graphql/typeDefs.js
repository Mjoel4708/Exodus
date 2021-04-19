const { gql } = require('apollo-server');
module.exports = gql`
    type Service{
        id: ID!
        username: String!
        name: String!
        email: String!
        latitude: Float!
        longitude: Float!
        category: String!
        title: String!
        description: String!
        createdAt: String!
        rates: Int!
        ready: Boolean!
        requests: [Request]!
        stars: [Star]!
        starCount: Int!
        requestCount: Int! 
    }
    type Request{
       id: ID!
       createdAt: String!
       phoneNumber: String!
       status: String!
       latitude: Float!
       longitude: Float!
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
        latitude: Float!
        longitude: Float!
        email: String!
        createdAt: String!

    }
    input ServiceInput{
        username: String!
        email: String!
        name: String!
        latitude: Float!
        longitude: Float!
        category: String!
        title: String!
        rates: Int!
        description: String!

    }
    input RegisterInput{
        username: String!
        name: String!
        latitude: Float!
        longitude: Float!
        email: String!

    }
    input RequestInput{
        serviceId: String!
        username: String!
        phoneNumber: String!
        description: String!
        longitude: Float!
        latitude: Float!

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

        createRequest(requestInput: RequestInput): Service!
        updateRequest(serviceId: ID!, requestId: ID!, status: String!): Service!

        updateService(serviceId: ID!, longitude: Float, latitude: Float, ready: Boolean): Service!
        deleteRequest(serviceId: ID!, requestId: ID!): Service!
        starService(serviceId: ID!, username: String!): Service!
    }
    type Subscription{
        newRequest: Request!
    }

`;