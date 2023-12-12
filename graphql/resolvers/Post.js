const User = require("../../models/User");
const Location = require("../../models/Location");
const Post = require("../../models/Post");
const Tag = require("../../models/Tag");

const postResolver = {
    Query : {
        async getPosts(_, args) {
            const posts = await Post.findAll({include : ['tags', {model : User}]})
            const postList = []
            posts.forEach(post => {
                const tags = []
                post?.dataValues?.tags?.forEach(tag => {
                    tags.push(tag.dataValues);
                });
                post.dataValues.owner = post?.dataValues.User.dataValues
                post.dataValues.tag = tags
                postList.push(post.dataValues)
            });
            return postList
        },
        async getPostById(_, args) {
            const post = await Post.findByPk(args.id, {include : ['tags', {model : User}]})
            post.dataValues.owner = post?.dataValues.User.dataValues
            const tags = []
            post?.dataValues?.tags?.forEach(tag => {
                tags.push(tag.dataValues);
            });
            post.dataValues.tag = tags
            return post.dataValues
        }

        
    },
    Mutation : {
        async newPost(_, args){
            console.log("zzzzzzzzzzzzz");
            const user = await User.findByPk(args.input.owner);
            if (!user) {
                return
            }
            

            const post = {
                text : args.input.text,
                image : args.input.image,
                likes : args.input.likes,
                UserId : user.dataValues.id
            }
            
            const newPost = await Post.create(post);
            if (newPost) {
                args.input.tag.forEach(async(t) => {
                    await Tag.create({
                        text : t.text,
                        PostId : newPost.dataValues.id
                    });
                });
            }
            
            const finalPost = await Post.findByPk(newPost.dataValues.id, {include : ['tags']})
            
            return finalPost
        },

        async deletePost(_, args) {
            const post = await Post.findByPk(args.id)
            return post.destroy()
        }
    }
}

module.exports = {postResolver}