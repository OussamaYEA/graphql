const types = `
    type Post {
        id : Int!
        text : String!
        image: String!
        likes : Int!
        owner : User!
        tag : [Tag]
    }

    input PostInput {
        text : String!
        image: String!
        likes : Int!
        owner : Int!
        tag : [TagInput]
    }

`

const queries = `
    getPosts : [Post!]!
    getPostById(id: Int) : Post!
`

const mutations = `
    newPost(input : PostInput!) : Post!
    deletePost(id: Int) : Post
`

module.exports = {types, queries, mutations}