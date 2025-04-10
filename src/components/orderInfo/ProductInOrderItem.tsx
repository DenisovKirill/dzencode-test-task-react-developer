import { IProduct } from '@/types';
import Image from 'next/image';
import { PriceBox, Tooltip } from '@/components';

export const ProductInOrderItem = ({ photo, title, price, date }: IProduct) => {
  return (
    <div className="flex gap-8 w-full bg-white rounded-xl h-18 items-center px-10 border border-gray-300">
      <div className="w-20 h-20 relative">
        <Image src={photo} alt={title} fill className="object-contain" />
      </div>
      <Tooltip text={title}>
        <div className="truncate w-100">{title}</div>
      </Tooltip>
      <PriceBox price={price} />
      <div className="w-30">{date}</div>
    </div>
  );
};
