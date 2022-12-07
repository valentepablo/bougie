import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <ul className='grid grid-cols-2 md:grid-cols-4 gap-4'>
      {products.map((product) => (
        <ProductItem key={product.nombre} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
