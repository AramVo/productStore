import { Model } from 'sequelize';

import { sequelize } from '../connection';

export class ProductTag extends Model { }

ProductTag.init(
    {},
    {
        sequelize,
        timestamps: false,
    }
);

