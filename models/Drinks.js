const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Drinks extends Model { }

Drinks.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        drink_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        drink_type: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        ingredient: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        instruction: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        },
        created_at: {
            type: DataTypes.DATETIME,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'drink',
    }
);

module.exports = Drinks;