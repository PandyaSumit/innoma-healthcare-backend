import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { errorHandler } from './middlewares/error.middleware.js';
import logger from './utils/logger.js';

const app: Application = express();

// Middlewares
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// Routes Placeholder
// app.use('/api/v1', routes);

// Error Handling
app.use(errorHandler);

export default app;
