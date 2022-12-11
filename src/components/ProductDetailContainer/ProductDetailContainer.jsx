import ProductDetail from './ProductDetail';
import { database } from '../../db';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductDetailContainer = () => {
  const [producto, setProducto] = useState();
  const [loading, setLoading] = useState(true);
  const { nombre } = useParams();

  useEffect(() => {
    const productName = nombre.split('-').join(' ');
    for (const productos in database) {
      if (database[productos].find((producto) => producto.nombre === productName)) {
        setProducto(database[productos].find((producto) => producto.nombre === productName));
      }
    }
    setLoading(false);
  }, [nombre]);

  return (
    <>
      {loading ? (
        <div className='text-white'>Cargando...</div>
      ) : (
        <ProductDetail producto={producto} />
      )}
    </>
  );
};

export default ProductDetailContainer;
