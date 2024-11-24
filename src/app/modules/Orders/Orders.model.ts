import { model, Schema } from 'mongoose';
import { TOrders } from './Orders.interface';

const OrdersSchema = new Schema<TOrders>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      match: /\S+@\S+\.\S+/,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
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
