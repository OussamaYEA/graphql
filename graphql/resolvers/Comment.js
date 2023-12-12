const User = require("../../models/User");
const Location = require("../../models/Location");
const Post = require("../../models/Post");
const Tag = require("../../models/Tag");
const Comment = require("../../models/Comment");

const commentResolver = {
    Query : {
        async getComments(_, args) {
            const comments = await Comment.findAll({include : [{model : Post}, {model : User}]});
            const commentList = []
            comments.forEach(comment => {
                comment.dataValues.owner = comment.dataValues.User.dataValues
                comment.dataValues.post = comment.dataValues.Post.dataValues
                commentList.push(comment.dataValues)
            });

            return commentList
        },
        async getCommentsById(root, args) {
            const comments = await Comment.findAll({where : {PostId : args.id}},{include : [{model : Post}, {model : User}]})
            const commentList = []
            comments.forEach(comment => {
                comment.dataValues.owner = comment.dataValues.User.dataValues
                comment.dataValues.post = comment.dataValues.Post.dataValues
                commentList.push(comment.dataValues)
            });

            return commentList
        }
    },
    Mutation : {
        async newComment(_, args){
            const user = await User.findByPk(args.input.owner);
            const post = await Post.findByPk(args.input.post);
            if (!user || !post) {
                return
            }
            const comment = await Comment.create({
                message : args.input.message,
                PostId : args.input.post,
                UserId : args.input.owner
            })
            console.log(comment);
            return comment
        },

        async deleteComment(_, args) {
            const comment = await Comment.findByPk(args.id)
            return comment.destroy()
        }
    }
}

module.exports = {commentResolver}