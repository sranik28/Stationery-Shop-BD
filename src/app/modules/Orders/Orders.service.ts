import { Product } from '../Stationery-Product/StationeryProduct.model';
import { TOrders } from './Orders.interface';
import { Orders } from './Orders.model';

const createOrderIntoDB = async (orderData: TOrders) => {
  const product = await Product.findById(orderData.product);

  if (!product) {
    throw new Error('Product not found');
  }

  if (product.quantity < orderData.quantity && product.inStock) {
    throw new Error('Insufficient quantity');
  }

  if (!Number.isInteger(orderData.quantity) || orderData.quantity <= 0) {
    throw new Error('Order quantity must be a positive integer');
  }

  product.quantity = product.quantity - orderData.quantity;
  if (product.quantity === 0) {
    product.inStock = false;
    await product.save();
  }
  await product.save();

  const result = await Orders.create(orderData);
  return result;
};

const getRevenue = async () => {
  const revenueFromDB = await Orders.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: { $multiply: ['$quantity', '$totalPrice'] } },
      },
    },
  ]);

  const result = revenueFromDB[0]
    ? { totalRevenue: revenueFromDB[0].totalRevenue }
    : { totalRevenue: 0 };

  return result;
};

export const OrdersService = {
  createOrderIntoDB,
  getRevenue,
};
