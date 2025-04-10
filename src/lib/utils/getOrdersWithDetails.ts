import { getTotalPrice } from '@/lib';
import { IOrder, IProduct } from '@/types';

interface IArgs {
  orders: IOrder[];
  products: IProduct[];
}

export const getOrdersWithDetails = ({ orders, products }: IArgs) => {
  return orders.map((order) => {
    const qty = products.filter((product) => product.orderId === order.id).length;
    const productsByOrder = products.filter((product) => product.orderId === order.id);
    const price = getTotalPrice(productsByOrder);

    return {
      ...order,
      qty,
      price,
    };
  });
};
