const types = `
    type User {
        id : Int!
        title : String!
        firstName : String!
        lastName : String!
        gender : String!
        email : String!
        dateOfBirth : String!
        phone : String!
        picture : String!
        location : Location!
    }

    input UserInput {
        title : String!, 
        firstName : String!, 
        lastName : String!, 
        gender : String!, 
        email : String!, 
        dateOfBirth : String!, 
        phone : String!, 
        picture : String!,
        location : LocationInput!
    }
`

const queries = `
    getUsers: [User!]!
`

const mutations = `
    newUser(input : UserInput!): User!
    deleteUser(id: Int) : User
`
module.exports =  {types, queries, mutations}