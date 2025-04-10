import { supabase } from '@/lib';
import { mockOrders, mockProducts } from '@/mock';

const initOrders = async () => {
  for (const order of mockOrders) {
    const { error } = await supabase.from('orders').upsert([
      {
        id: order.id,
        title: order.title,
        date: order.date,
        description: order.description,
      },
    ]);

    if (error) {
      console.error('Error adding order:', error.message);
    }
  }
};

const initProducts = async () => {
  for (const product of mockProducts) {
    const dataToInsert = {
      ...product,
      guarantee: JSON.stringify(product.guarantee),
      price: JSON.stringify(product.price),
    };

    const { error } = await supabase.from('products').upsert([dataToInsert]);

    if (error) {
      console.error('Error adding product:', error.message);
    }
  }
};

export const initializeDatabase = async () => {
  await initOrders();
  await initProducts();
};
