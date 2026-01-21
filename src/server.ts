import app from './app.js';
import { connectDB } from './config/database.js';
import { connectRedis } from './config/redis.js';
import { initializeFirebase } from './config/firebase.js';
import logger from './utils/logger.js';

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        // Initialize Connections
        await connectDB();
        await connectRedis();
        initializeFirebase();

        app.listen(PORT, () => {
            logger.info(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`);
        });
    } catch (error) {
        logger.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
