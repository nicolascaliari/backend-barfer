const { Sequelize } = require('sequelize')

const databse = process.env.DB_DATABASE
const username = process.env.DB_USER
const password = process.env.DB_PASSWORD

const sequelize = new Sequelize(
    databse,
    username,
    password,
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)


const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
    } catch (err) {

    }
}


module.exports = { sequelize, dbConnection }