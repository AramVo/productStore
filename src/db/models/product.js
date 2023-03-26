import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../connection';

export class Product extends Model { }

Product.init({
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    }
}, {
    sequelize,
});

