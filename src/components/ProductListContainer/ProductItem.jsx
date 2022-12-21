import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <Link to={`/${product.tipo.split(' ').join('-')}/${product.categoryId.split(' ').join('-')}`}>
      <li className='text-center'>
        <img
          src={`../images/${product.imagen}`}
          alt={product.nombre}
          className='h-56 md:h-[420px] aspect-square object-cover rounded shadow-md w-full'
        />

        <h3 className='uppercase text-sm md:text-lg leading-tight font-bold mt-2 md:mt-4'>
          {product.categoryId}
        </h3>
      </li>
    </Link>
  );
};

export default ProductItem;
