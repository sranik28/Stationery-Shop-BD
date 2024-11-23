import { TOrders } from "./Orders.interface";
import { Orders } from "./Orders.model";

const createOrderIntoDB = async (orderData: TOrders) => {
    const result = await Orders.create(orderData);
    return result;
};

const getRevenue = async () => {
    const revenueFromDB = await Orders.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalPrice" },
        },
      },
    ]);
    const result = {
        totalRevenue: revenueFromDB[0]?.totalRevenue,
      };
    return result;
  };

export const OrdersService = {
    createOrderIntoDB,
    getRevenue
};