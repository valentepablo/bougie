import { database } from '../../db';
import ProductList from './ProductList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductListContainer = () => {
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const filtrados = database[`${categoria}`];
    setProductosFiltrados(filtrados);
  }, [categoria]);

  return <ProductList productos={productosFiltrados} categoria={categoria} />;
};

export default ProductListContainer;
