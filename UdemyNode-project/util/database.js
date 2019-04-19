const Sequelize = require('sequelize');

const sequelize = new Sequelize('node', '', '', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
