const ProductItem = ({ product }) => {
  return (
    <li className='p-3'>
      <img src={product.imagen} alt='producto artesanal' className='rounded' />

      <h3 className='text-xl text-zinc-500 uppercase tracking-wide font-semibold my-1'>
        {product.nombre}
      </h3>
      <p className='text-lg font-bold mb-2'>$1.250</p>

      {product.aroma !== null && (
        <p className='text-zinc-500 uppercase text-xs'>
          Aroma: <span className='font-semibold'>{product.aroma}</span>
        </p>
      )}
      <p className='uppercase text-xs bg-zinc-200 max-w-max mt-2 p-1'>{product.linea}</p>
    </li>
  );
};

export default ProductItem;
