const { sequelize } = require('../config/db')
const { DataTypes } = require('sequelize')

const User = sequelize.define(
    'users',
    {
        idusuarios: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        timestamps: false,
        tableName: 'users'

    })


module.exports = User;