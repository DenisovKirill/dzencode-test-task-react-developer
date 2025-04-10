'use client';

import { Modal } from '@/components';
import { DeleteIcon } from '@/icons';
import { deleteOrderById } from '@/lib';

interface IProps {
  title: string;
  id: number;
}

export const OrderDeleteButton = ({ title, id }: IProps) => {
  return (
    <Modal
      triggerIcon={<DeleteIcon className="cursor-pointer size-4" />}
      modalContent={`${title} (ID: ${id}) has not been processed or delivered to the buyer.
        Are you sure you want to delete the order?`}
      modalTitle="Are you sure you want to delete this order?"
      onApplyAction={() => deleteOrderById(id)}
    />
  );
};
