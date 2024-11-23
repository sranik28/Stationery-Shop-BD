import { Request, Response } from 'express';
import { OrdersService } from './Orders.service';
import { HandelApiSuccess } from '../../../utils/HandelApiSuccess';
import { HandelApiError } from '../../../utils/HandelApiError';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await OrdersService.createOrderIntoDB(order);
    HandelApiSuccess(res, 201, 'Order created successfully!', result);
  } catch (error) {
    HandelApiError(res, 500, 'Failed to create order', error);
  }
};

const revenue = async (req: Request, res: Response) => {
  try {
    const result = await OrdersService.getRevenue();
    HandelApiSuccess(res, 200, 'Order created successfully!', result);
  } catch (error) {
    HandelApiError(res, 500, 'Failed to create order', error);
  }
};

export const OrdersController = {
  createOrder,
  revenue,
};
