const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Post = require('./Post');
const User = require('./User');

const Comment = sequelize.define('Comment',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement :true,
        allowNull :false,
        primaryKey : true,
    },
    message : {
        type: Sequelize.STRING,
        allowNull :false,
    }
})

Comment.belongsTo(Post,{
    onDelete: 'CASCADE'
})
Comment.belongsTo(User,{
    onDelete: 'CASCADE'
})

module.exports = Comment;