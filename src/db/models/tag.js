import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../index.js';

export class Tag extends Model { }

Tag.init({
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    sequelize,
});

