const { sequelize } = require('../config/db')
const { DataTypes } = require('sequelize')


/**
 * Modelo de productos.
 * @module models/products
 * @requires sequelize
 * @requires sequelize/Model
 * @requires sequelize/DataTypes
 * 
 */
const Product = sequelize.define(
    'productos',
    {
        idproducto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        precio_cincokg: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        precio_diezkg: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idCategory: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        imgInfo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
    timestamps: false, // Desactiva la generación automática de createdAt y updatedAt
})

module.exports = Product