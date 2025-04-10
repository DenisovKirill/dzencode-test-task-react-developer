'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ListBulletIcon } from '@/icons';

interface IProps {
  id: number;
}

export const OrderInfoButton = ({ id }: IProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isActive = searchParams.get('order') === id.toString();

  const handleClick = () => {
    const currentOrder = searchParams.get('order');
    if (currentOrder === id.toString()) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set('order', id.toString());

    router.push(`?${params.toString()}`);
  };

  if (!searchParams) return null;

  return (
    <button
      type="button"
      className={`rounded-full w-6 h-6 flex items-center justify-center border cursor-pointer ${
        isActive ? 'border-blue-600 bg-blue-200' : 'border-gray-300'
      }`}
      onClick={handleClick}
    >
      <ListBulletIcon />
    </button>
  );
};
