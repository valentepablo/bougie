const ProductItem = ({ product }) => {
  return (
    <li className='p-3'>
      <img src={product.imagen} alt='producto artesanal' className='rounded' />

      <h3 className='text-lg leading-tight text-zinc-800 font-semibold mt-2'>{product.nombre}</h3>

      <p className='text-lg font-semibold text-zinc-700 mb-2'>
        <span className='text-zinc-500'>$</span>1.250
      </p>

      <div className='bg-zinc-50 p-1 rounded-lg'>
        <p className='text-zinc-500 text-sm'>
          Aroma: <span className='capitalize font-semibold'>{product.aroma}</span>
        </p>
        <p className='text-zinc-500 text-sm'>
          Linea: <span className='capitalize font-semibold'>{product.linea}</span>
        </p>
      </div>
    </li>
  );
};

export default ProductItem;
