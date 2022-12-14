import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';

const CartContainer = () => {
  const { open, openCart, products } = useContext(CartContext);

  open ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');

  return (
    <>
      <div
        onClick={openCart}
        className={`${
          open ? 'pointer-events-auto' : 'pointer-events-none hidden'
        } fixed top-0 left-0 h-screen w-screen bg-zinc-900/50 z-40`}></div>

      <div
        className={`${
          open ? 'translate-x-0' : 'translate-x-[600px]'
        } transition duration-300 delay-150 ease-out fixed z-50 top-0 right-0 w-3/4 h-full bg-zinc-200 shadow-xl flex flex-col`}>
        <div className='bg-zinc-900 text-zinc-300 px-4 py-3 font-semibold text-center text-sm'>
          Carrito de compras
        </div>

        <div className='overflow-y-scroll grow flex flex-col gap-1.5'>
          {products && products.map((product) => <CartItem key={product.id} product={product} />)}
        </div>

        <div className='flex justify-between items-center bg-white border-t px-4 py-3  reverse-shadow-md'>
          <p>Precio total:</p>
          <p>$10.250</p>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
