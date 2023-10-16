const { sequelize } = require('../config/db')
const { DataTypes } = require('sequelize')

const User = sequelize.define(
    'usuarios',
    {
        idusuarios: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        provincia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        localidad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        piso: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{
        timestamps: false // Desactiva la generación automática de createdAt y updatedAt

    })


module.exports = User;