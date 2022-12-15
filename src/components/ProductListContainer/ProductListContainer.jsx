import ProductList from './ProductList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

const ProductListContainer = () => {
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    const db = getFirestore();
    getDocs(collection(db, 'productos')).then((result) =>
      setProductosFiltrados(
        result.docs.map((doc) => doc.data()).filter((producto) => producto.tipo === categoria)
      )
    );
    setLoading(false);
  }, [categoria]);

  return (
    <div>
      {loading ? (
        <div className='text-center mt-10'>Cargando...</div>
      ) : (
        <ProductList productos={productosFiltrados} categoria={categoria} />
      )}
    </div>
  );
};

export default ProductListContainer;
