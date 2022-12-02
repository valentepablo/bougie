import { Menu } from '@headlessui/react';
import { GiCandleFlame } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='flex items-center p-4 justify-between h-20 bg-black shadow'>
      <p className='font-bold text-amber-50'>Bougie Shop</p>
      <ul className='md:flex hidden items-center text-amber-50'>
        <li className='py-1 px-2 cursor-pointer hover:text-amber-100'>Velas</li>
        <li className='py-1 px-2 cursor-pointer hover:text-amber-100'>Combos</li>
        <li className='py-1 px-2 cursor-pointer hover:text-amber-100'>Nosotros</li>
        <li className='py-1 px-2 cursor-pointer hover:text-amber-100'>Contacto</li>
      </ul>
      <Menu as='div' className='text-white md:hidden'>
        <Menu.Button>
          <GiCandleFlame className='w-6 h-6' />
        </Menu.Button>

        <Menu.Items
          as='ul'
          className='absolute text-center w-full h-full bg-black text-amber-50 shadow p-6 pt-12 right-0 top-0 whitespace-nowrap space-y-6 text-4xl'>
          <Menu.Button className='absolute right-4 top-6'>
            <AiOutlineClose className='w-6 h-6 text-white' />
          </Menu.Button>
          <Menu.Item>
            <li>
              <a href='#'>Velas</a>
            </li>
          </Menu.Item>
          <Menu.Item>
            <li>
              <a href='#'>Combos</a>
            </li>
          </Menu.Item>
          <Menu.Item>
            <li>
              <a href='#'>Nosotros</a>
            </li>
          </Menu.Item>
          <Menu.Item>
            <li>
              <a href='#'>Contacto</a>
            </li>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default Navbar;
