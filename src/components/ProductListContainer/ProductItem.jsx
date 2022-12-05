const ProductItem = ({ product }) => {
  return (
    <li className='p-3'>
      <img src={product.imagen} alt='producto artesanal' className='rounded' />

      <h3 className='text-lg text-zinc-500 tracking-wide font-semibold my-1'>{product.nombre}</h3>
      <p className='text-lg font-bold mb-2'>$1.250</p>

      <p className='text-zinc-500 uppercase text-xs'>
        Aroma: <span className='font-semibold'>{product.aroma}</span>
      </p>

      <p className='text-zinc-500 uppercase text-xs'>
        Linea: <span className='font-semibold'>{product.linea}</span>
      </p>
    </li>
  );
};

export default ProductItem;
