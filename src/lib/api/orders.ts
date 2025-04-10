'use server';

import { IOrder } from '@/types';
import { revalidatePath } from 'next/cache';
import { supabase } from '@/lib';

export const getOrders = async (): Promise<IOrder[]> => {
  const { data, error } = await supabase.from('orders').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data as IOrder[];
};

export const deleteOrderById = async (id: number): Promise<void> => {
  const { data, error } = await supabase.from('orders').select('id').eq('id', id);

  if (error) {
    throw new Error(error.message);
  }

  if (data.length === 0) {
    throw new Error(`Order with id ${id} not found`);
  }

  const { error: deleteError } = await supabase.from('orders').delete().eq('id', id);

  if (deleteError) {
    throw new Error(deleteError.message);
  }

  revalidatePath('/orders');
};
