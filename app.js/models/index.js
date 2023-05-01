const { Sequelize, DataTypes } = require('sequelize')
const dbConfig = require('../config/db.config.js')
const path = require('path')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
})

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

console.log("Db file")
const user = require('./User.js')

db.user = user



module.exports = { db, sequelize, DataTypes };

