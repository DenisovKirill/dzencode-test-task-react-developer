import { getOrders, getProducts, getProductsByOrder, getOrdersWithDetails } from '@/lib';
import { OrderInfo, OrderItem } from '@/components';

interface IProps {
  searchParams: Promise<{
    order?: string;
  }>;
}

const Orders = async ({ searchParams }: IProps) => {
  const currSearchParams = await searchParams;
  const { order } = currSearchParams;

  const orders = await getOrders();
  const products = await getProducts();

  const selectedProductsByOrder = order ? await getProductsByOrder(+order) : [];

  const ordersWithDetails = getOrdersWithDetails({ orders, products });

  const currentOrderTitle = order ? orders.find((o) => o.id === +order)?.title || '' : '';

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-4 items-center">
        <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center border-3 border-lime-600 text-xs text-white leading-none">
          +
        </div>
        <h2 className="text-xl font-semibold">Orders / {orders.length}</h2>
      </div>
      <div className="flex w-full gap-5">
        <div className={`${order ? 'w-1/3' : 'w-full'} flex flex-col gap-5`}>
          {ordersWithDetails.map((item) => (
            <OrderItem key={item.id} selectedOrder={order ? Number(order) : undefined} {...item} />
          ))}
        </div>
        {order && <OrderInfo title={currentOrderTitle} products={selectedProductsByOrder} />}
      </div>
    </div>
  );
};

export default Orders;
