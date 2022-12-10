import BackButton from '../BackButton';
import Filtros from '../Filtros';
import ProductItem from './ProductItem';

const ProductList = ({ productos }) => {
  return (
    <>
      <div className='px-4 flex items-center justify-between'>
        <BackButton />
        <Filtros productos={productos} />
      </div>
      <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4'>
        {productos.map((product) => (
          <ProductItem key={product.nombre} product={product} />
        ))}
      </ul>
    </>
  );
};

export default ProductList;
