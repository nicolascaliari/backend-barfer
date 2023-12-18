const {sequelize} = require('../config/db')
const {DataTypes} = require('sequelize')    



const Category = sequelize.define(
    'categories',{
        idcategory:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        timestamps: false,
        tableName: 'categories'
    }
)



module.exports = Category