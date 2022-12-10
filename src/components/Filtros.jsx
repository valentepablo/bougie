import { Link } from 'react-router-dom';
import { Popover, Disclosure } from '@headlessui/react';
import { BsFilterRight } from 'react-icons/bs';
import { HiChevronDown } from 'react-icons/hi';
import { useEffect, useState } from 'react';

const Filtros = ({ productos, setAromaElegido }) => {
  const [aromas, setAromas] = useState([]);

  const handleSetAroma = (e) => {
    setAromaElegido(e.target.innerHTML);
  };

  useEffect(() => {
    const aromasUnicos = new Set(productos.map((producto) => producto.aroma));
    const listaDeAromas = Array.from(aromasUnicos);
    setAromas(listaDeAromas);
  }, [productos]);

  return (
    <Popover className='flex justify-end relative'>
      <Popover.Button className='text-zinc-300 font-bold uppercase text-xs flex items-center gap-1 focus:outline-none'>
        <BsFilterRight className='w-4 h-4' />
        Filtrar
      </Popover.Button>
      <Popover.Overlay className='fixed inset-0 bg-black/30' />
      <Popover.Panel className='absolute bg-white overflow-hidden rounded-md shadow w-52 right-0 top-8 divide-y divide-neutral-200'>
        {({ close }) => (
          <>
            <Disclosure as='div'>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`flex items-center justify-between w-full font-bold text-sm uppercase tracking-wider py-3 px-4 ${
                      open ? 'shadow-md' : ''
                    }`}>
                    <span>Linea</span>
                    <HiChevronDown
                      className={open ? 'rotate-180 transition' : 'rotate-0 transition'}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <ul className='text-zinc-500 bg-neutral-100 space-y-3 p-4'>
                      <li>
                        <Link to='/productos/velas'>Velas</Link>
                      </li>
                      <li>
                        <Link to='/productos/difusores'>Difusores</Link>
                      </li>
                      <li>
                        <Link to='/productos/home-spray'>Home Spray</Link>
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure as='div'>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`flex items-center justify-between w-full font-bold text-sm uppercase tracking-wider py-3 px-4 ${
                      open ? 'shadow' : ''
                    }`}>
                    <span>Aroma</span>
                    <HiChevronDown
                      className={open ? 'rotate-180 transition' : 'rotate-0 transition'}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    {({ close }) => (
                      <ul className='text-zinc-500 bg-neutral-100 space-y-3 p-4'>
                        {aromas.map((aroma) => (
                          <li
                            key={aroma}
                            className='capitalize'
                            onClick={(e) => {
                              handleSetAroma(e);
                              close();
                            }}>
                            {aroma}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <div className='px-4 py-2'>
              <button
                onClick={() => {
                  setAromaElegido('');
                  close();
                }}
                className='uppercase ml-auto text-[10px] flex gap-1 items-center font-bold text-red-800'>
                Quitar filtros
              </button>
            </div>
          </>
        )}
      </Popover.Panel>
    </Popover>
  );
};

export default Filtros;
