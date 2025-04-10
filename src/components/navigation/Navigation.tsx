'use client';

import { usePathname } from 'next/navigation';
import { TransitionLink } from '@/components';

const navItemClass = 'font-bold cursor-pointer text-lg';

export const Navigation = () => {
  const pathname = usePathname();

  const isProducts = pathname.startsWith('/products');
  const isOrders = pathname.startsWith('/orders');

  return (
    <nav className="w-full">
      <ul className="flex flex-col gap-4 items-center">
        <li
          className={`${navItemClass} ${isProducts ? 'text-blue-600 underline' : 'text-gray-700'}`}
        >
          <TransitionLink href="/products">Products</TransitionLink>
        </li>
        <li className={`${navItemClass} ${isOrders ? 'text-blue-600 underline' : 'text-gray-700'}`}>
          <TransitionLink href="/orders">Orders</TransitionLink>
        </li>
      </ul>
    </nav>
  );
};
