import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../connection';

export class Category extends Model { }

Category.init({
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    sequelize,
});

