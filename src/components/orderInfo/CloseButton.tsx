'use client';

import { useRouter } from 'next/navigation';
import { XMarkIcon } from '@/icons';

export const CloseButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/orders');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md shadow-black absolute -top-3 -right-3 cursor-pointer"
    >
      <XMarkIcon />
    </button>
  );
};
