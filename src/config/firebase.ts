import * as admin from 'firebase-admin';
import dotenv from 'dotenv';
import logger from '../utils/logger.js';

dotenv.config();

const firebaseConfig = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

export const initializeFirebase = () => {
    try {
        if (!admin.apps.length) {
            admin.initializeApp({
                credential: admin.credential.cert(firebaseConfig),
            });
            logger.info('Firebase Admin initialized successfully.');
        }
    } catch (error) {
        logger.error('Error initializing Firebase Admin:', error);
    }
};

export default admin;
