import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ product }) => {
  const { removeItemFromCart, currencyFormatter } = useContext(CartContext);
  return (
    <div className='bg-white h-max mx-1.5 rounded shadow'>
      <div className='flex gap-4 p-4'>
        <img
          src={`../../images/${product.imagen}`}
          alt={product.categoryId}
          className='w-20 aspect-square object-cover rounded xl:w-32'
        />
        <div className='grow'>
          <p className='text-sm capitalize xl:text-lg'>{product.nombre}</p>
          <p className='text-xs capitalize text-zinc-500 xl:text-sm'>{product.aroma}</p>
          <p className='text-xs text-zinc-500 mt-1 xl:text-sm'>Cantidad: {product.cantidad}</p>
          <div className='flex items-center justify-between'>
            <p className='text-xs text-zinc-500 xl:text-sm'>
              u. {currencyFormatter.format(product.precio)}
            </p>
            <p className='xl:text-lg'>
              {currencyFormatter.format(product.precio * product.cantidad)}
            </p>
          </div>
        </div>
      </div>
      <div className='border-t px-4 py-2 flex items-center'>
        <button
          className='text-xs text-red-700 2xl:text-base'
          onClick={() => removeItemFromCart(product)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
