import { Response } from 'express';

export const HandelApiSuccess = (
  res: Response,
  statusCode: number = 200,
  message: string = 'Operation successful',
  data: any,
) => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};
