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
    'products',
    {
        idproducto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price_fivekg: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price_tenkg: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idCategory: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
    timestamps: false,
    tableName: 'products'
})

module.exports = Product