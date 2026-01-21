import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger.js';

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    logger.error(`[${req.method}] ${req.path} >> ${statusCode} - ${message}`);

    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
};
