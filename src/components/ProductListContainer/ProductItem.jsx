import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <Link to={`/${product.tipo}/${product.nombre.split(' ').join('-').toLowerCase()}`}>
      <li className=' text-center'>
        <img src={product.imagen} alt='producto artesanal' className='rounded' />

        <h3 className='text-lg leading-tight text-slate-200 my-2 font-lora'>{product.nombre}</h3>

        <div className='rounded-lg text-zinc-600 text-xs'>
          <p>
            Aroma: <span className='capitalize font-semibold'>{product.aroma}</span>
          </p>
          <p>
            Linea: <span className='capitalize font-semibold'>{product.linea}</span>
          </p>
        </div>
      </li>
    </Link>
  );
};

export default ProductItem;
