import * as dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

const {
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_HOST,
    DB_PORT,
} = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres'
});

export const connect = async () => {
    await sequelize.authenticate()
    await import('./models');


    if (process.env.ENV === 'develop') {
        await sequelize.sync({ alter: true })
    }
}

