import Image from 'next/image';
import { IProduct } from '@/types';
import { PriceBox, Tooltip } from '@/components';

export const ProductItem = ({
  photo,
  title,
  serialNumber,
  isNew,
  type,
  specification,
  guarantee,
  price,
  orderId,
  date,
}: IProduct) => {
  return (
    <div className="flex gap-4 w-full bg-white rounded-xl h-22 items-center px-10 border border-gray-300">
      <div className="w-20 h-20 relative">
        <Image src={photo} alt={title} fill className="object-contain" />
      </div>
      <div className="w-80">
        <Tooltip text={title}>
          <div className="truncate">{title}</div>
        </Tooltip>
        <Tooltip text={serialNumber}>
          <div className="truncate">{serialNumber}</div>
        </Tooltip>
      </div>
      <Tooltip text={type}>
        <div className="truncate w-22">{type}</div>
      </Tooltip>
      <Tooltip text={specification}>
        <div className="truncate w-30">{specification}</div>
      </Tooltip>

      <Tooltip text={`From ${guarantee.start || '—'} to ${guarantee.end || '—'}`}>
        <div className="w-48 flex gap-2">
          <div>
            <div className="opacity-50">From </div>
            <div className="opacity-50">To </div>
          </div>
          <div>
            <div>{guarantee.start || '—'}</div>
            <div>{guarantee.end || '—'}</div>
          </div>
        </div>
      </Tooltip>
      <Tooltip text={isNew ? 'New' : 'Used'}>
        <div className="truncate w-10">{isNew ? 'New' : 'Used'}</div>
      </Tooltip>
      <PriceBox price={price} />
      <Tooltip text={orderId ? `Order ${orderId}` : '—'}>
        <div className="w-30">{orderId ? `Order ${orderId}` : '—'}</div>
      </Tooltip>
      <Tooltip text={date}>
        <div className="w-30">{date}</div>
      </Tooltip>
    </div>
  );
};
