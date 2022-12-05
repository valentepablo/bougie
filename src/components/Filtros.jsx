import { Link } from 'react-router-dom';
import { Popover, Disclosure } from '@headlessui/react';
import { BsFilterRight } from 'react-icons/bs';
import { HiChevronDown } from 'react-icons/hi';

const Filtros = () => {
  return (
    <Popover className='flex justify-end relative'>
      <Popover.Button className='font-bold uppercase text-xs flex items-center gap-1 focus:outline-none'>
        {/* <BsFilterRight className='w-4 h-4' /> */}
        Filtrar
      </Popover.Button>
      <Popover.Overlay className='fixed inset-0 bg-black/30' />
      <Popover.Panel className='absolute bg-white overflow-hidden rounded-md shadow w-52 right-0 top-8 divide-y divide-neutral-200'>
        <Disclosure as='div'>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex items-center justify-between w-full font-bold text-sm uppercase tracking-wider py-3 px-4 ${
                  open ? 'shadow-md' : ''
                }`}>
                <span>Linea</span>
                <HiChevronDown className={open ? 'rotate-180 transition' : 'rotate-0 transition'} />
              </Disclosure.Button>
              <Disclosure.Panel>
                <ul className='text-zinc-500 bg-neutral-100 space-y-3 p-4'>
                  <li>
                    <Link to='/linea/basicas'>Basicas</Link>
                  </li>
                  <li>
                    <Link to='/linea/colores'>Colores</Link>
                  </li>
                  <li>
                    <Link to='/linea/astrologicas'>Astrologicas</Link>
                  </li>
                  <li>
                    <Link to='/linea/espirituales'>Espirituales</Link>
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
                <span>Color</span>
                <HiChevronDown className={open ? 'rotate-180 transition' : 'rotate-0 transition'} />
              </Disclosure.Button>
              <Disclosure.Panel>
                <ul className='text-zinc-500 bg-neutral-100 space-y-3 p-4'>
                  <li>Azul</li>
                  <li>Beige</li>
                  <li>Verde</li>
                  <li>Rojo</li>
                  <li>Negro</li>
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
                <HiChevronDown className={open ? 'rotate-180 transition' : 'rotate-0 transition'} />
              </Disclosure.Button>
              <Disclosure.Panel>
                <ul className='text-zinc-500 bg-neutral-100 space-y-3 p-4'>
                  <li>Chivo</li>
                  <li>Pedo</li>
                  <li>Vomito</li>
                  <li>Rancio</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </Popover.Panel>
    </Popover>
  );
};

export default Filtros;
