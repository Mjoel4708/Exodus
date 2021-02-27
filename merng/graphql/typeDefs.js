const { gql } = require('apollo-server');
module.exports = gql`
    type Service{
        id: ID!
        title: String!
        username: String!
        location: String!
        
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
    }
    type Mutation{
        register(registerInput: RegisterInput): User!
    }

`;