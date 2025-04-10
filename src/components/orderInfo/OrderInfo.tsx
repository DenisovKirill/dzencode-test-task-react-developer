import { Tooltip } from '@/components';
import { IProduct } from '@/types';
import { ProductInOrderItem } from './ProductInOrderItem';
import { CloseButton } from '@/components/orderInfo/CloseButton';

interface IProps {
  title: string;
  products: IProduct[];
}

export const OrderInfo = ({ title, products }: IProps) => {
  return (
    <div
      className="w-full p-4 bg-white rounded-xl items-center px-10 border border-gray-300 relative
      transition-all duration-1000 ease-in-out animate-fade-in"
    >
      <Tooltip text={title} className="left-12">
        <h2 className="truncate text-lg font-semibold mb-4">{title}</h2>
      </Tooltip>
      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <ProductInOrderItem key={product.id} {...product} />
        ))}
      </div>
      <CloseButton />
    </div>
  );
};
