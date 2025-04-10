import { IOrder, IPrice } from '@/types';
import { PriceBox, Tooltip } from '@/components';
import { OrderInfoButton } from './OrderInfoButton';
import { OrderDeleteButton } from './OrderDeleteButton';
import { ChevronRight } from '@/icons';

interface IProps extends IOrder {
  price: IPrice[];
  qty: number;
  selectedOrder?: number;
}

export const OrderItem = ({ title, date, description, price, qty, id, selectedOrder }: IProps) => {
  return (
    <div
      className={`flex bg-white rounded-xl h-12 items-center border border-gray-300 w-full justify-between transition-all duration-1000 ease-in-out animate-fade-in" ${selectedOrder ? ' pl-4' : 'px-10'}`}
    >
      <div className="flex items-center gap-3">
        {!selectedOrder && (
          <Tooltip text={title}>
            <div className="truncate w-70">{title}</div>
          </Tooltip>
        )}
        <OrderInfoButton id={id} />
        <Tooltip text={`${qty} products`}>
          <div className="w-20">{qty} products</div>
        </Tooltip>

        {!selectedOrder && (
          <Tooltip text={description}>
            <div className="truncate w-30">{description}</div>
          </Tooltip>
        )}
        <div className="w-20">{date}</div>
        <PriceBox price={price} />
        {!selectedOrder && <OrderDeleteButton title={title} id={id} />}
      </div>
      {selectedOrder === id && (
        <div className="bg-green-500 h-full flex items-center justify-center w-8 rounded-r-xl">
          <ChevronRight />
        </div>
      )}
    </div>
  );
};
