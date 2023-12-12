const {userResolver} = require('./User')
const {postResolver} = require('./Post')
const {commentResolver} = require('./Comment')

const resolvers = {

    Query : Object.assign({}, userResolver.Query, postResolver.Query, commentResolver.Query),
    Mutation: Object.assign({}, userResolver.Mutation, postResolver.Mutation, commentResolver.Mutation)
}

module.exports = resolvers;