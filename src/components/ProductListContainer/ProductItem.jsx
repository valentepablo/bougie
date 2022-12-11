import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <Link
      to={`/productos/${product.linea.split(' ').join('-')}/${product.nombre
        .split(' ')
        .join('-')}`}>
      <li className=' text-center'>
        <img src={`../images/${product.imagen}`} alt={product.nombre} className='rounded' />

        <h3 className='capitalize text-lg leading-tight text-slate-200 my-2 font-lora'>
          {product.nombre}
        </h3>

        {/* <div className='rounded-lg text-zinc-500 text-xs'>
          <p>
            Aroma: <span className='capitalize font-semibold'>{product.aroma}</span>
          </p>
          <p>
            Linea: <span className='capitalize font-semibold'>{product.linea}</span>
          </p>
        </div> */}
      </li>
    </Link>
  );
};

export default ProductItem;
