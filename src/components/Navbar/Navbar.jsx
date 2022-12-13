import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    getDocs(collection(db, 'categorias')).then((result) => {
      const resultCategories = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      resultCategories && setCategorias(resultCategories);
    });
  }, []);

  return (
    <div className='fixed inset-x-0 top-0 bg-zinc-200 shadow-lg flex items-center px-4 justify-between h-20 z-10 text-zinc-900'>
      <Link to='/'>
        <p className='font-semibold'>Bougie</p>
      </Link>

      <ul className='md:flex hidden items-center gap-4'>
        {categorias
          .filter((categoria) => categoria.parentId === null)
          .map((categoria) => (
            <li className='capitalize py-1 px-2 cursor-pointer' key={categoria.id}>
              <Link to={`/productos/${categoria.categoryId.split(' ').join('-')}`}>
                {categoria.categoryId}
              </Link>
            </li>
          ))}

        <li className='py-1 px-2 cursor-pointer'>
          <Link to='/sobre-nosotros'>Nosotros</Link>
        </li>
        <li className='py-1 px-2 cursor-pointer'>
          <Link to='/contacto'>Contacto</Link>
        </li>
      </ul>

      <button className='md:hidden peer relative z-40'>
        <HiMenu className='w-6 h-6' />
      </button>

      <div className='md:hidden fixed top-0 left-0 bg-white h-screen w-3/4 shadow-2xl peer-focus:left-0 peer:transition duration-200 delay-150 ease-out z-30'>
        <div className='h-20 flex items-center px-4 border-b'>
          <p className='font-semibold'>Bougie</p>
        </div>
        <ul className='flex flex-col gap-6 px-4 py-6 text-xl'>
          {categorias
            .filter((categoria) => categoria.parentId === null)
            .map((categoria) => (
              <li className='capitalize ' key={categoria.id}>
                <Link to={`/productos/${categoria.categoryId.split(' ').join('-')}`}>
                  {categoria.categoryId}
                </Link>
              </li>
            ))}

          <li className=''>
            <Link to='/sobre-nosotros'>Nosotros</Link>
          </li>
          <li className=''>
            <Link to='/contacto'>Contacto</Link>
          </li>
        </ul>
      </div>

      <div className='md:hidden fixed top-0 left-0 w-screen h-screen opacity-0 pointer-events-none peer-focus:pointer-events-auto  peer-focus:opacity-100 peer:transition duration-200 bg-zinc-900/50 z-20'></div>
      {/* <Menu as='div' className='md:hidden'>
        {({ open }) => (
          <>
            <Menu.Button>
              <HiMenu className='w-6 h-6' />
            </Menu.Button>

            {open && (
              <Menu.Items
                static
                as='ul'
                className='absolute text-center w-full h-screen flex flex-col gap-10 pb-20 items-center justify-center bg-zinc-200 inset-x-0 top-0 whitespace-nowrap text-4xl'>
                <Menu.Button className='absolute right-4 top-6'>
                  <AiOutlineClose className='w-6 h-6' />
                </Menu.Button>
                {categorias &&
                  categorias
                    .filter((categoria) => categoria.parentId === null)
                    .map((categoria) => (
                      <Menu.Item key={categoria.id}>
                        {(close) => (
                          <li className='capitalize'>
                            <Link
                              to={`/productos/${categoria.categoryId.split(' ').join('-')}`}
                              onClick={() => {
                                close();
                              }}>
                              {categoria.categoryId}
                            </Link>
                          </li>
                        )}
                      </Menu.Item>
                    ))}

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
      </Menu> */}
    </div>
  );
};

export default Navbar;
