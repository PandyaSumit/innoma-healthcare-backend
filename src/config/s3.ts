import { S3Client } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';
import logger from '../utils/logger.js';

dotenv.config();

const s3Client = new S3Client({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
});

logger.info('AWS S3 Client initialized.');

export default s3Client;
