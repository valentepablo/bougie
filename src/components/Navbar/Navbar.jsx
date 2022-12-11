import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='fixed inset-x-0 top-0 bg-black flex items-center px-4 justify-between h-20 z-10 text-zinc-200'>
      <Link to='/'>
        <p className='font-semibold'>Bougie</p>
      </Link>
      <ul className='md:flex hidden items-center gap-4'>
        <li className='py-1 px-2 cursor-pointer'>
          <Link to='/productos/velas'>Velas</Link>
        </li>
        <li className='py-1 px-2 cursor-pointer'>
          <Link to='/productos/difusores'>Difusores</Link>
        </li>
        <li className='py-1 px-2 cursor-pointer'>
          <Link to='/productos/home-spray'>Home Spray</Link>
        </li>
        <li className='py-1 px-2 cursor-pointer'>
          <Link to='/sobre-nosotros'>Nosotros</Link>
        </li>
        <li className='py-1 px-2 cursor-pointer'>
          <Link to='/contacto'>Contacto</Link>
        </li>
      </ul>

      <Menu as='div' className='md:hidden'>
        {({ open }) => (
          <>
            <Menu.Button>
              <HiMenu className='w-6 h-6' />
            </Menu.Button>

            {open && (
              <Menu.Items
                static
                as='ul'
                className='absolute text-center w-full h-screen flex flex-col gap-10 pb-20 items-center justify-center bg-black inset-x-0 top-0 whitespace-nowrap text-4xl'>
                <Menu.Button className='absolute right-8 top-6'>
                  <AiOutlineClose className='w-6 h-6' />
                </Menu.Button>
                <Menu.Item>
                  {({ close }) => (
                    <li>
                      <Link to='/productos/velas' onClick={close}>
                        Velas
                      </Link>
                    </li>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ close }) => (
                    <li>
                      <Link to='/productos/difusores' onClick={close}>
                        Difusores
                      </Link>
                    </li>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ close }) => (
                    <li>
                      <Link to='/productos/home-spray' onClick={close}>
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
