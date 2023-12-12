const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('social_network_graphql_nodejs', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    
  });
  module.exports = sequelize;