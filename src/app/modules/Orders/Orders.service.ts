import { TOrders } from "./Orders.interface";
import { Orders } from "./Orders.model";

const createOrderIntoDB = async (orderData: TOrders) => {
    const result = await Orders.create(orderData);
    return result;
};

export const OrdersService = {
    createOrderIntoDB,
};