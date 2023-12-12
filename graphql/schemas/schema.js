const User = require("./User")
const Location = require("./Location")
const Tag = require("./Tag")
const Post = require("./Post")
const Comment = require("./Comment")
const { gql } = require('apollo-server');

const types = [];
const queries = [];
const mutations = [];

const schemas =  [Location, User, Tag, Post,Comment];
schemas.forEach((s) =>{
    types.push(s.types);
    queries.push(s.queries);
    mutations.push(s.mutations);
})


const typeDefs = gql`

    ${types.join('\n')}
    
    type Query {
        ${queries.join('\n')}
    }

    type Mutation {
        ${mutations.join('\n')}
    }
    
`;

module.exports = typeDefs;