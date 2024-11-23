import { Response } from 'express';

export const HandelApiError = (
  res: Response,
  statusCode: number = 500,
  message: string = 'An error occurred',
  error: any,
) => {
  res.status(statusCode).json({
    message,
    success: false,
    error: {
      name: error.name || 'Error',
      ...(error.errors
        ? { errors: error.errors }
        : { message: error.message || 'Unexpected error' }),
    },
    stack: process.env.NODE_ENV === 'production' ? undefined : error.stack,
  });
};
