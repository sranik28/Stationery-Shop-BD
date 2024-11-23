import { model, Schema } from 'mongoose';
import { TProduct } from './StationeryProduct.interface';

const stationeryProductSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: [
        'Writing',
        'Office Supplies',
        'Art Supplies',
        'Educational',
        'Technology',
      ],
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    inStock: {
      type: Boolean,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

export const Product = model<TProduct>('Product', stationeryProductSchema);
