import { model, Schema } from 'mongoose';
import { TOrders } from './Orders.interface';


const OrdersSchema = new Schema<TOrders>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    product: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    totalPrice: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

export const Orders = model<TOrders>('Orders', OrdersSchema);
