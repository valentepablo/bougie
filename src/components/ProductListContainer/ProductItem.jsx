import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <Link
      to={`/productos/${product.tipo.split(' ').join('-')}/${product.categoryId
        .split(' ')
        .join('-')}`}>
      <li className=' text-center'>
        <img src={`../images/${product.imagen}`} alt={product.nombre} className='rounded' />

        <h3 className='capitalize text-lg leading-tight font-semibold my-2 font-lora'>
          {product.categoryId}
        </h3>
      </li>
    </Link>
  );
};

export default ProductItem;
