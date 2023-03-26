import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';

import { sequelize } from '../index.js';

export class User extends Model { }

User.init({
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM(['seller', 'buyer']),
        allowNull: false,
    }
}, {
    sequelize,
    hooks: {
        beforeCreate: async (record) => {
            record.dataValues.password = await bcrypt.hash(record.dataValues.password, bcrypt.genSaltSync());
        }
    },
});

User.prototype.comparePasswords = async function (password) {
    console.log({
        password,
        instance: this
    });
    return bcrypt.compare(password, this.password);
}
