const types = `
    type Comment {
        id : Int!
        message : String!
        owner : User!
        post : Post!
    }
    input CommentInput {
        message: String!
        owner : Int!
        post : Int!
    }
`

const queries = `
    getCommentsById(id:Int) : Comment!
    getComments: [Comment!]!
`

const mutations = `
    newComment(input : CommentInput!) : Comment!
    deleteComment(id: Int) : Comment
`

module.exports = {types, queries, mutations}