const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./User');
const Tag = require('./Tag');

const Post = sequelize.define('Post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement :true,
        allowNull :false,
        primaryKey : true,
    },
    text : {
        type: Sequelize.STRING,
        allowNull :false,
    },
    image : {
        type: Sequelize.STRING,
        allowNull :false,
    },
    likes : {
        type: Sequelize.INTEGER,
        allowNull :false,
    },


})

Post.belongsTo(User,{
    onDelete : 'CASCADE'
})

Post.hasMany(Tag, {as : "tags"})
Tag.belongsTo(Post, {
    
    as :"Post"
})

/*Post.associate = () => {
    Post.belongsToMany(Tag, {
        onDelete:'CASCADE'
    });
  };*/
module.exports = Post;