import { useState } from 'react';
import BackButton from '../BackButton';
import Filtros from '../Filtros';
import ProductItem from './ProductItem';

const ProductList = ({ productos }) => {
  const [aromaElegido, setAromaElegido] = useState('');

  return (
    <>
      <div className='px-4 flex items-center justify-between'>
        <BackButton />
        <Filtros productos={productos} setAromaElegido={setAromaElegido} />
      </div>
      {aromaElegido ? (
        <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4'>
          {productos
            .filter((producto) => producto.aroma === aromaElegido)
            .map((product) => (
              <ProductItem key={product.nombre} product={product} />
            ))}
        </ul>
      ) : (
        <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4'>
          {productos.map((product) => (
            <ProductItem key={product.nombre} product={product} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ProductList;
