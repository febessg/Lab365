const Sequelize = require('sequelize');

const connection = new Sequelize('omrSequelize', 'postgres', 'admin', {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432'
});

module.exports = connection;