import { Menu } from '@headlessui/react';

const Navbar = () => {
  return (
    <div className='flex items-center p-4 justify-between h-20 bg-black shadow'>
      <p className='font-bold text-amber-50'>Bougie Shop</p>
      <ul className='md:flex hidden items-center text-amber-50'>
        <li className='py-1 px-2 cursor-pointer hover:text-amber-100'>Velas</li>
        <li className='py-1 px-2 cursor-pointer hover:text-amber-100'>Combos</li>
      </ul>
      <Menu as='div' className='text-white'>
        <Menu.Button>menu</Menu.Button>
        <Menu.Items
          as='ul'
          className='absolute w-full h-full bg-black text-amber-50 shadow p-6 pt-12 right-0 top-0 whitespace-nowrap space-y-6 text-2xl'>
          <Menu.Button className='w-5 h-5 flex items-center justify-center absolute right-3 top-3'>
            <p>x</p>
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
              <a href='#'>Otros</a>
            </li>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default Navbar;
