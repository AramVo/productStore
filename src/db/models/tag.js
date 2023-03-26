import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../connection';

export class Tag extends Model { }

Tag.init({
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    sequelize,
});

