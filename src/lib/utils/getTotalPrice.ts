import { IPrice, IProduct } from '@/types';

export const getTotalPrice = (products: IProduct[]) => {
  return Object.values(
    products
      .flatMap((item) => item.price)
      .reduce(
        (acc, { value, symbol, isDefault }) => {
          acc[symbol] = acc[symbol]
            ? { ...acc[symbol], value: acc[symbol].value + value }
            : { value, symbol, isDefault };
          return acc;
        },
        {} as Record<string, IPrice>,
      ),
  );
};
