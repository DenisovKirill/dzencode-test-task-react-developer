import { getProducts, getProductsByType } from '@/lib';
import { Select, ProductItem } from '@/components';

interface IProps {
  searchParams: Promise<{
    type?: string;
  }>;
}

const Products = async ({ searchParams }: IProps) => {
  const currSearchParams = await searchParams;
  const { type } = currSearchParams;
  const products = type ? await getProductsByType(type) : await getProducts();

  return (
    <div className="flex flex-col gap-15">
      <div className="flex gap-20">
        <h2 className="text-xl font-semibold">Products / {products.length}</h2>
        <Select options={['Monitors', 'Printers', 'Keyboards']} label="Type:" selected={type} />
      </div>
      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
