import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='fixed inset-x-px top-0 bg-black flex items-center px-8 justify-between h-20'>
      <Link to='/'>
        <p className='font-semibold text-amber-50'>Bougie</p>
      </Link>
      <ul className='md:flex hidden items-center gap-4 text-amber-50'>
        <li className='py-1 px-2 cursor-pointer hover:text-amber-100'>
          <Link to='/velas'>Velas</Link>
        </li>
        <li className='py-1 px-2 cursor-pointer hover:text-amber-100'>
          <Link to='/difusores'>Difusores</Link>
        </li>
        <li className='py-1 px-2 cursor-pointer hover:text-amber-100'>
          <Link to='/home-spray'>Home Spray</Link>
        </li>
        <li className='py-1 px-2 cursor-pointer hover:text-amber-100'>
          <Link to='/sobre-nosotros'>Nosotros</Link>
        </li>
        <li className='py-1 px-2 cursor-pointer hover:text-amber-100'>
          <Link to='/contacto'>Contacto</Link>
        </li>
      </ul>

      <Menu as='div' className='text-white md:hidden'>
        {({ open }) => (
          <>
            <Menu.Button>
              <HiMenu className='w-6 h-6' />
            </Menu.Button>

            {open && (
              <Menu.Items
                static
                as='ul'
                className='absolute text-center w-full h-screen flex flex-col gap-10 pb-10 items-center justify-center bg-black text-amber-50 shadow 
                inset-x-0 top-0 whitespace-nowrap text-4xl z-10'>
                <Menu.Button className='absolute right-8 top-6'>
                  <AiOutlineClose className='w-6 h-6 text-white' />
                </Menu.Button>
                <Menu.Item>
                  {({ close }) => (
                    <li>
                      <Link to='/velas' onClick={close}>
                        Velas
                      </Link>
                    </li>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ close }) => (
                    <li>
                      <Link to='/difusores' onClick={close}>
                        Difusores
                      </Link>
                    </li>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ close }) => (
                    <li>
                      <Link to='/home-spray' onClick={close}>
                        Home Spray
                      </Link>
                    </li>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ close }) => (
                    <li>
                      <Link to='/sobre-nosotros' onClick={close}>
                        Nosotros
                      </Link>
                    </li>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ close }) => (
                    <li>
                      <Link to='/contacto' onClick={close}>
                        Contacto
                      </Link>
                    </li>
                  )}
                </Menu.Item>
              </Menu.Items>
            )}
          </>
        )}
      </Menu>
    </div>
  );
};

export default Navbar;
