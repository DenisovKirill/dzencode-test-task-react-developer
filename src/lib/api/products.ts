'use server';

import { supabase } from '@/lib';
import { IProduct } from '@/types';

const parseProduct = (row: any): IProduct => ({
  ...row,
  price: JSON.parse(row.price),
  guarantee: JSON.parse(row.guarantee),
});

export const getProducts = async (): Promise<IProduct[]> => {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data.map(parseProduct);
};

export const getProductsByType = async (type: string): Promise<IProduct[]> => {
  const { data, error } = await supabase.from('products').select('*').eq('type', type);

  if (error) {
    throw new Error(error.message);
  }

  return data.map(parseProduct);
};

export const getProductsByOrder = async (orderId: number): Promise<IProduct[]> => {
  const { data, error } = await supabase.from('products').select('*').eq('orderId', orderId);

  if (error) {
    throw new Error(error.message);
  }

  return data.map(parseProduct);
};
