const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/schemas/schema');
const resolvers = require('./graphql/resolvers/resolver');

const User = require('./models/User')
const Location = require('./models/Location')
const Post = require('./models/Post')
const Comment = require('./models/Comment')
const Tag = require('./models/Tag')


const sequelize = require("./config/sequelize")

/*sequelize
    .sync({force:true})
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })  */

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { Location, User, Post, Tag, Comment},
    });
    
    server
    .listen()
    .then(({ url }) => console.log('Server is running on localhost:4000'));