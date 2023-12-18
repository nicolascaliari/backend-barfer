const { Sequelize } = require('sequelize')

const databse = process.env.DATABASE
const username = process.env.USERNAME
const password = process.env.PASSWORD

const sequelize = new Sequelize(databse, username, password,
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