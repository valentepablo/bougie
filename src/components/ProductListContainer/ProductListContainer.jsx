import { db } from '../../db';
import ProductList from './ProductList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductListContainer = () => {
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const filtrados = db.filter((productos) => productos.tipo === categoria);
    setProductosFiltrados(filtrados);
  }, [categoria]);

  return <ProductList productos={productosFiltrados} />;
};

export default ProductListContainer;
