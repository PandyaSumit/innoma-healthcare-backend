import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';

export const validate =
    (schema: z.ZodObject<any>) =>
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                await schema.parseAsync({
                    body: req.body,
                    query: req.query,
                    params: req.params,
                });
                return next();
            } catch (error) {
                if (error instanceof ZodError) {
                    return res.status(400).json({
                        success: false,
                        errors: error.issues.map((issue) => ({
                            path: issue.path,
                            message: issue.message,
                        })),
                    });
                }
                return next(error);
            }
        };
