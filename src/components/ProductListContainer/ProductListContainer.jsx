import { db } from '../../db';
import ProductList from './ProductList';

const ProductListContainer = () => {
  return <ProductList products={db} />;
};

export default ProductListContainer;
