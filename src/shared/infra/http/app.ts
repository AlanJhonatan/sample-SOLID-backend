import express, { NextFunction, Request, Response } from 'express';

import 'express-async-errors';
import 'reflect-metadata';
import { AppError } from '../../errors/AppError';
import { router } from './routes';

import '../../container';

const app = express();

app.use(express.json());
app.use('/api', router);

// (express-async-errors)
// Error Middleware
app.use(
  // eslint-disable-next-line no-unused-vars
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
