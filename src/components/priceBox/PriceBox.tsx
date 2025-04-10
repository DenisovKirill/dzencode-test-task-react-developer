import { IPrice } from '@/types';
import { Tooltip } from '@/components';

interface IProps {
  price: IPrice[];
}

export const PriceBox = ({ price }: IProps) => {
  const { value: usValue, symbol: usSymbol } = price[0] || {};
  const { value: uaValue, symbol: uaSymbol } = price[1] || {};

  return (
    <Tooltip text={`${usValue} ${usSymbol} / ${uaValue} ${uaSymbol}`}>
      <div className="w-20">
        <div className="opacity-50 text-xs">
          {usValue} {usSymbol}
        </div>
        <div>
          {uaValue} {uaSymbol}
        </div>
      </div>
    </Tooltip>
  );
};
