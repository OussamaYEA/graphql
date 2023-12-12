const types = `
    type Location {
        id : Int!
        city : String!
        state : String!
        country : String!
        timezone : String!
    }
    input LocationInput{
        city : String!
        state : String!
        country : String!
        timezone : String!
    }
`

const mutations = `
    
`

module.exports =  {types, mutations}