const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Location = require('./Location');

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement :true,
        allowNull :false,
        primaryKey : true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull :false,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull :false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull :false,
    },
    gender: {
        type: Sequelize.STRING,
        allowNull :false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull :false,
    },
    dateOfBirth: {
        type: Sequelize.STRING,
        allowNull :false,
    },
    phone: {
        type: Sequelize.STRING,
        allowNull :false,
    },
    picture: {
        type: Sequelize.STRING,
        allowNull :false,
    },
})

User.belongsTo(Location ,{
    
    foreignKey: {
        allowNull: false
    }
})

module.exports = User;