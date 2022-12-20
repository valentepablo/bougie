import ProductDetail from './ProductDetail';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

const ProductDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { producto } = useParams();

  useEffect(() => {
    const productName = producto.split('-').join(' ');
    const db = getFirestore();
    getDocs(collection(db, 'productos'))
      .then((result) =>
        result.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .find((item) => item.categoryId === productName)
      )
      .then((result) => {
        setProduct(result);
      });

    setLoading(false);
  }, [producto]);

  return (
    <>
      {loading ? (
        <div className='text-center mt-10'>Cargando...</div>
      ) : (
        product && <ProductDetail producto={product} />
      )}
    </>
  );
};

export default ProductDetailContainer;
