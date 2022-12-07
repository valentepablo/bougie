import ProductDetail from './ProductDetail';
import { db } from '../../db';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { nombre } = useParams();

  useEffect(() => {
    const productName = nombre.split('-').join(' ');
    const result = db.find((product) => product.nombre.toLowerCase() === productName);
    setProduct(result);
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div className='text-white'>Cargando...</div>
      ) : (
        <ProductDetail product={product} />
      )}
    </>
  );
};

export default ProductDetailContainer;
