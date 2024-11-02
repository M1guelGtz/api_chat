require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    port: 8080,
    dialectOptions: {
        allowPublicKeyRetrieval: true, 
    }
});

module.exports = sequelize;