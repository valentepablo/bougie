import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useState } from 'react';
import BackButton from '../BackButton';

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className='text-slate-200 px-4 pb-2'>
      <div className='mb-4'>
        <BackButton />
      </div>

      <img src={`${product.imagen}`} alt={`${product.nombre}`} className='rounded' />
      <h2 className='text-3xl mt-3 font-lora'>{product.nombre}</h2>
      <div className='flex items-center divide-x divide-zinc-800 mt-2 pt-2 border-t border-zinc-800 text-zinc-400'>
        <p className='text-xs uppercase pr-2'>{product.linea}</p>
        <p className='text-xs uppercase px-2'>{product.aroma}</p>
      </div>
      <p className='mt-4 text-zinc-400'>{product.descripcion}</p>
      <div className='mt-6'>
        <div className='flex items-center justify-between mb-3 pl-3 bg-slate-100/5 h-12 rounded-md'>
          <div className='flex items-center'>
            <p className='text-sm mr-2'>Cantidad:</p>
            <span className='text-sm font-bold'>{quantity}</span>
          </div>
          <div className='flex gap-3'>
            <button className='p-2' onClick={() => setQuantity((quantity) => quantity - 1)}>
              <HiChevronLeft />
            </button>
            <button className='p-2' onClick={() => setQuantity((quantity) => quantity + 1)}>
              <HiChevronRight />
            </button>
          </div>
        </div>
        <button className='bg-slate-50 mb-6 uppercase text-xs text-black font-bold w-full h-12 rounded-md'>
          Comprar ahora
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
