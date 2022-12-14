import { Listbox, Transition } from '@headlessui/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useState } from 'react';
import BackButton from '../BackButton';

const ProductDetail = ({ producto }) => {
  const [quantity, setQuantity] = useState(0);
  const [aromaElegido, setAromaElegido] = useState('Elegir');

  const checkout = () => {
    const orden = {
      tipo: producto.tipo,
      linea: producto.categoryId,
      aroma: aromaElegido,
      cantidad: quantity,
      precio: producto.precio * quantity,
    };

    console.log(orden);
  };

  return (
    <div className='relative pt-4 px-4 pb-2'>
      <div className='mb-4'>
        <BackButton />
      </div>

      <img src={`../../images/${producto.imagen}`} alt={producto.categoryId} className='rounded' />
      <h2 className='capitalize text-3xl mt-3 font-lora'>{producto.categoryId}</h2>
      <div className='mt-2 pt-2 border-t border-zinc-400' />

      <p className='text-zinc-500 text-xs uppercase'>{producto.tipo}</p>

      <Listbox as='div' className='' value={aromaElegido} onChange={setAromaElegido}>
        {({ open }) => {
          open
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto');
          return (
            <>
              <Listbox.Label className='text-zinc-500 text-xs uppercase pr-2'>
                Selecciona un aroma:
              </Listbox.Label>
              <Listbox.Button className='bg-zinc-200 px-2 py-1 rounded-md capitalize text-sm font-bold text-zinc-700'>
                {aromaElegido}
              </Listbox.Button>

              {open && (
                <div className='fixed left-0 top-0 w-screen h-screen bg-zinc-900/50 z-20'></div>
              )}

              <Transition
                show={open}
                enter='transition duration-150 ease-out'
                enterFrom='transform scale-95 opacity-0'
                enterTo='transform scale-100 opacity-100'
                leave='transition duration-150 ease-out'
                leaveFrom='transform scale-100 opacity-100'
                leaveTo='transform scale-95 opacity-0'
                className='fixed top-0 left-0 w-screen h-screen z-40'>
                <Listbox.Options
                  static
                  className='fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col h-max max-h-60 w-3/4 overflow-y-scroll bg-zinc-900 rounded-md divide-y divide-zinc-800 capitalize text-center text-zinc-300 '>
                  {producto.aromas.map((aroma) => (
                    <Listbox.Option value={aroma} key={aroma} className='py-1.5'>
                      {aroma}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </>
          );
        }}
      </Listbox>

      <p className='mt-3 text-zinc-500'>{producto.descripcion}</p>
      <p className='mt-3 font-semibold text-zinc-500'>
        $<span className='text-xl text-zinc-800'>{producto.precio}</span>
      </p>
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
        <button
          onClick={checkout}
          className='bg-black mb-6 uppercase text-xs text-zinc-200 font-bold w-full h-12 rounded-md'>
          Comprar ahora
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
