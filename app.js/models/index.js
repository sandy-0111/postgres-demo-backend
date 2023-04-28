import { Sequelize } from 'sequelize'
import dbConfig from '../config/db.config.js'

export const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
})

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

