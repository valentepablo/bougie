import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <ul className='grid grid-cols-2 rounded overflow-hidden bg-white'>
      {products.map((product) => (
        <ProductItem key={product.nombre} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
