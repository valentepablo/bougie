import { Listbox, Transition } from '@headlessui/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useState, useContext } from 'react';
import BackButton from '../BackButton';
import Section from '../Section/Section';
import SectionHeader from '../Section/SectionHeader';
import SectionBody from '../Section/SectionBody';
import { CartContext } from '../../context/CartContext';
import toast, { Toaster } from 'react-hot-toast';

const ProductDetail = ({ producto }) => {
  const { addItemToCart, currencyFormatter } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [aromaElegido, setAromaElegido] = useState('Elegir');

  const addItem = () => {
    if (aromaElegido === 'Elegir') {
      toast.error('Debes elegir un aroma');
      return;
    }

    const newItem = {
      nombre: producto.nombre,
      imagen: producto.imagen,
      tipo: producto.tipo,
      linea: producto.categoryId,
      aroma: aromaElegido,
      cantidad: quantity,
      precio: producto.precio,
      id: `${producto.id}-${aromaElegido.split(' ').join('-')}`,
    };

    addItemToCart(newItem, quantity);
    toast.success(`${newItem.nombre} se agrego al carrito`);
    setQuantity(1);
  };

  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity === 1) return;
    setQuantity((quantity) => quantity - 1);
  };

  return (
    <>
      <Section>
        <div className='relative'>
          <div className='flex justify-end'>
            <SectionHeader>
              <BackButton />
            </SectionHeader>
          </div>
          <SectionBody>
            <div className='flex flex-col md:flex-row md:gap-4 lg:gap-6'>
              <div className='w-full max-w-[1000px]'>
                <img
                  src={`../../images/${producto.imagen}`}
                  alt={producto.categoryId}
                  className='rounded w-full aspect-square object-cover'
                />
              </div>
              <div>
                <h2 className='capitalize text-3xl md:text-5xl mt-3 md:mt-0 font-lora'>
                  {producto.categoryId}
                </h2>
                <div className='mt-2 pt-2 border-t border-zinc-400' />
                <p className='text-zinc-500 text-xs md:text-base uppercase'>{producto.tipo}</p>
                <Listbox as='div' value={aromaElegido} onChange={setAromaElegido}>
                  {({ open }) => {
                    open
                      ? (document.body.style.overflow = 'hidden')
                      : (document.body.style.overflow = 'auto');
                    return (
                      <>
                        <Listbox.Label className='text-zinc-500 text-xs md:text-base uppercase pr-2'>
                          Selecciona un aroma:
                        </Listbox.Label>
                        <Listbox.Button className='bg-zinc-200 px-2 py-1 rounded-md capitalize text-sm md:text-base font-bold text-zinc-700'>
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
                            className='fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col max-h-60 w-3/4 md:w-1/3 md:max-h-80 md:overflow-y-auto bg-zinc-900 rounded-md divide-y divide-zinc-800 capitalize text-center text-zinc-300 '>
                            {producto.aromas.map((aroma) => (
                              <Listbox.Option
                                value={aroma}
                                key={aroma}
                                className='py-1.5 md:py-2.5 cursor-pointer hover:bg-zinc-800'>
                                {aroma}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </>
                    );
                  }}
                </Listbox>
                <p className='mt-3 md:mt-8 text-zinc-500'>{producto.descripcion}</p>
                <p className='mt-3 md:mt-8 font-semibold text-zinc-500'>
                  <span className='text-xl md:text-3xl text-zinc-800'>
                    {currencyFormatter.format(producto.precio)}
                  </span>
                </p>
                <div className='mt-6 md:mt-12'>
                  <div className='flex items-center justify-between mb-3 px-3 bg-zinc-200 h-12 md:h-16 rounded-md'>
                    <div className='flex items-center'>
                      <p className='text-sm md:text-base mr-2'>Cantidad:</p>
                      <span className='text-sm md:text-base font-bold'>{quantity}</span>
                    </div>
                    <div className='flex gap-3'>
                      <button className='p-2 bg-black/5 rounded' onClick={decreaseQuantity}>
                        <HiChevronLeft />
                      </button>
                      <button className='p-2 bg-black/5 rounded' onClick={increaseQuantity}>
                        <HiChevronRight />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={addItem}
                    className='bg-black mb-6 uppercase text-xs text-zinc-200 font-bold w-full h-12 md:h-16 rounded-md'>
                    Comprar ahora
                  </button>
                </div>
              </div>
            </div>
          </SectionBody>
        </div>
      </Section>
      <Toaster
        position='bottom-center'
        toastOptions={{
          success: {
            className: 'uppercase text-xs font-semibold',
            duration: 3000,
            style: {
              background: 'rgb(187 247 208)',
              color: '#000',
              border: '1px solid #bbb',
            },
          },
          error: {
            duration: 3000,
            style: {
              background: 'rgb(254 202 202)',
              color: 'rgb(127 29 29)',
            },
          },
        }}
      />
    </>
  );
};

export default ProductDetail;
