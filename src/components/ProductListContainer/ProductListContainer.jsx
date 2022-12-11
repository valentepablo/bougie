import ProductList from './ProductList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

const ProductListContainer = () => {
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const db = getFirestore();
    getDocs(collection(db, 'productos')).then((result) =>
      setProductosFiltrados(
        result.docs.map((doc) => doc.data()).filter((producto) => producto.tipo === categoria)
      )
    );
  }, [categoria]);

  return <ProductList productos={productosFiltrados} categoria={categoria} />;
};

export default ProductListContainer;
