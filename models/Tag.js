const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Post = require('./Post');

const Tag = sequelize.define('Tag', {
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
})

/*Tag.associate = () => {
    Tag.belongsTo(Post, {
        foreignKey: {
          allowNull: false
        },
    });
  };*/



module.exports = Tag;