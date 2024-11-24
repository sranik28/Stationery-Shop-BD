import { Types } from 'mongoose';

export type TOrders = {
  email: string;
  product: Types.ObjectId;
  quantity: number;
  totalPrice: number;
};
