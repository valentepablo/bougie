import { Listbox } from '@headlessui/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useState } from 'react';
import BackButton from '../BackButton';

const ProductDetail = ({ producto }) => {
  const [quantity, setQuantity] = useState(0);
  const [aromaElegido, setAromaElegido] = useState('Elegir');

  return (
    <div className='pt-4 px-4 pb-2'>
      <div className='mb-4'>
        <BackButton />
      </div>

      <img src={`../../images/${producto.imagen}`} alt={producto.nombre} className='rounded' />
      <h2 className='capitalize text-3xl mt-3 font-lora'>{producto.nombre}</h2>
      <div className='mt-2 pt-2 border-t border-zinc-400' />

      <p className='text-zinc-500 text-xs uppercase'>{producto.linea}</p>

      <Listbox as='div' className='mt-1 relative' value={aromaElegido} onChange={setAromaElegido}>
        <Listbox.Label className='text-zinc-500 text-xs uppercase pr-2'>
          Selecciona un aroma:
        </Listbox.Label>
        <Listbox.Button className='capitalize text-sm font-bold text-zinc-700'>
          {aromaElegido}
        </Listbox.Button>
        <Listbox.Options className='absolute inset-x-0 -top-1/2 -translate-y-1/2 bg-zinc-900 rounded-md divide-y divide-zinc-800 capitalize text-center text-zinc-400'>
          {producto.aromas.map((aroma) => (
            <Listbox.Option value={aroma} key={aroma} className='py-1'>
              {aroma}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>

      <p className='mt-3 text-zinc-500'>{producto.descripcion}</p>
      <div className='mt-6'>
        <div className='flex items-center justify-between mb-3 pl-3 bg-zinc-200 h-12 rounded-md'>
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
        <button className='bg-black mb-6 uppercase text-xs text-zinc-200 font-bold w-full h-12 rounded-md'>
          Comprar ahora
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
