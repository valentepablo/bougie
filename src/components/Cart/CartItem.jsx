const CartItem = ({ product }) => {
  return (
    <div className='bg-white h-max'>
      <div className='flex gap-4 p-4'>
        <img
          src={`../../images/${product.imagen}`}
          alt={product.categoryId}
          className='w-20 aspect-square object-cover rounded'
        />
        <div className='grow'>
          <p className='text-sm capitalize'>{product.nombre}</p>
          <p className='text-xs text-zinc-500 mt-1'>Cantidad: {product.cantidad}</p>
          <p className='text-right'>${product.precio}</p>
        </div>
      </div>
      <div className='border-t px-4 py-2 flex items-center'>
        <button className='text-xs'>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;
