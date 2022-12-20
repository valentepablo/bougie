import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';

const CartContainer = () => {
  const { open, openCart, products, calculateTotalPrice, currencyFormatter, clearCart } =
    useContext(CartContext);

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
          open ? 'translate-x-0' : 'translate-x-[100%]'
        } transition duration-300 delay-150 ease-out fixed z-50 top-0 right-0 w-3/4 sm:w-1/2 md:w-2/5 lg:w-1/3 2xl:w-1/4 h-full bg-zinc-200 shadow-xl flex flex-col`}>
        <div className='flex items-center justify-between bg-zinc-200 text-zinc-900 pl-4 pr-2 py-3 font-semibold text-sm shadow-md md:h-20'>
          <h3 className='md:text-lg'>Carrito de compras</h3>
          {products.length > 0 && (
            <button onClick={clearCart} className='text-red-700 text-xs md:text-base'>
              Limpiar
            </button>
          )}
        </div>

        <div className='overflow-y-scroll grow flex flex-col gap-1.5 py-1.5'>
          {products.length > 0 ? (
            products.map((product) => (
              <CartItem key={product.id + product.aroma} product={product} />
            ))
          ) : (
            <div className='grow flex flex-col justify-center items-center'>
              <p className='text-sm text-zinc-600'>No tienes productos en tu carrito.</p>
              <img
                src={`../../cart-illustration.png`}
                alt='Ilustracion de carrito de compras'
                className='max-w-full w-40 mt-6'
              />
            </div>
          )}
        </div>

        <div className='flex justify-between items-center bg-white border-t px-4 py-3 reverse-shadow-md md:h-20'>
          <p className='lg:text-lg'>Precio total:</p>
          <p className='lg:text-lg'>
            {products.length === 0 ? '$ 0' : currencyFormatter.format(calculateTotalPrice())}
          </p>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
