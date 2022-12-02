import { Popover } from '@headlessui/react';
import { BsFilterRight } from 'react-icons/bs';

const Filtros = () => {
  return (
    <Popover className='p-4 flex justify-end relative'>
      <Popover.Button className='font-semibold flex items-center gap-1'>
        <BsFilterRight className='w-5 h-5' />
        Filtrar
      </Popover.Button>
      <Popover.Overlay className='fixed inset-0 bg-black/30' />
      <Popover.Panel className='absolute bg-white rounded-md shadow w-56 right-4 top-12'>
        <div className='p-4'>
          <h4 className='font-bold text-sm uppercase tracking-wider'>Linea</h4>
          <ul className='text-zinc-500 pl-2 space-y-1 mt-2'>
            <li>Basicas</li>
            <li>Colores</li>
            <li>Astrologicas</li>
            <li>Espirituales</li>
          </ul>
        </div>
        <div className='p-4'>
          <h4 className='font-bold text-sm uppercase tracking-wider'>Color</h4>
          <ul className='text-zinc-500 pl-2 space-y-1 mt-2'>
            <li>Azul</li>
            <li>Beige</li>
            <li>Verde</li>
            <li>Rojo</li>
            <li>Negro</li>
          </ul>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default Filtros;
