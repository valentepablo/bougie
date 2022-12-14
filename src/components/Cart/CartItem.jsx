const CartItem = () => {
  return (
    <div className='bg-white'>
      <div className='flex gap-4 p-4'>
        <img src='../images/hornito.jpg' alt='Vela artesanal' className='w-16' />
        <div className='grow'>
          <p className='text-sm'>Vela para hornito</p>
          <p className='text-xs text-zinc-500 mt-1'>Cantidad: 3</p>
          <p className='text-right'>$1.250</p>
        </div>
      </div>
      <div className='border-t px-4 py-2 flex items-center'>
        <button className='text-xs'>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;
