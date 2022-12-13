import ProductDetail from './ProductDetail';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

const ProductDetailContainer = () => {
  const [producto, setProducto] = useState();
  const [loading, setLoading] = useState(true);
  const { nombre } = useParams();

  useEffect(() => {
    const productName = nombre.split('-').join(' ');
    const db = getFirestore();
    getDocs(collection(db, 'productos'))
      .then((result) =>
        result.docs.map((doc) => doc.data()).find((producto) => producto.categoryId === productName)
      )
      .then((result) => {
        setProducto(result);
      });

    setLoading(false);
  }, [nombre]);

  return (
    <>
      {loading ? (
        <div className='text-white'>Cargando...</div>
      ) : (
        producto && <ProductDetail producto={producto} />
      )}
    </>
  );
};

export default ProductDetailContainer;
