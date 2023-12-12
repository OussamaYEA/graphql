const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');


const Location = sequelize.define('Location',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement :true,
        allowNull :false,
        primaryKey : true,
    },
    city : {
        type: Sequelize.STRING,
        allowNull :false,
    },
    state : {
        type: Sequelize.STRING,
        allowNull :false,
    },
    country : {
        type: Sequelize.STRING,
        allowNull :false,
    },
    timezone : {
        type: Sequelize.STRING,
        allowNull :false,
    },
})




module.exports = Location;