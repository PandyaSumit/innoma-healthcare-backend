import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import logger from '../utils/logger.js';

dotenv.config();

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST || 'localhost';
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'postgres',
    logging: (msg) => logger.debug(msg),
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        logger.info('PostgreSQL connected successfully via Sequelize.');
    } catch (error) {
        logger.error('Unable to connect to the database:', error);
        process.exit(1);
    }
};

export default sequelize;
