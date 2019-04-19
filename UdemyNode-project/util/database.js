const Sequelize = require('sequelize');

const sequelize = new Sequelize('node', 'root', 'Burtonboy', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
