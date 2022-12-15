import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Navbar = () => {
  const { openCart } = useContext(CartContext);
  const [categorias, setCategorias] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    getDocs(collection(db, 'categorias')).then((result) => {
      const resultCategories = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      resultCategories && setCategorias(resultCategories);
    });
  }, []);

  open ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');

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

      <button onClick={() => setOpen(!open)} className='md:hidden relative z-40'>
        <HiMenu className='w-6 h-6' />
      </button>

      <div
        className={`${
          open ? 'translate-x-0' : '-translate-x-[600px]'
        } md:hidden fixed left-0 top-0 bg-white h-screen w-3/4 shadow-xl transition duration-300 delay-150 ease-out z-30`}>
        <div className='h-20 flex items-center px-4 border-b'>
          <Link to='/' onClick={() => setOpen(!open)}>
            <p className='font-semibold'>Bougie</p>
          </Link>
        </div>
        <div className='justify-between'>
          <ul className='flex flex-col gap-6 px-4 py-6 text-xl'>
            {categorias
              .filter((categoria) => categoria.parentId === null)
              .map((categoria) => (
                <li onClick={() => setOpen(!open)} key={categoria.id}>
                  <Link
                    className='flex items-center gap-4'
                    to={`/productos/${categoria.categoryId.split(' ').join('-')}`}>
                    <img className='w-8 h-8' src={`../images/${categoria.icon}`} />
                    <span className='capitalize'>{categoria.categoryId}</span>
                  </Link>
                </li>
              ))}
            <div className='border-t'></div>
            <li onClick={() => setOpen(!open)}>
              <Link className='flex items-center gap-4' to='/sobre-nosotros'>
                <div className='w-8 h-8'></div>
                <span>Nosotros</span>
              </Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link className='flex items-center gap-4' to='/contacto'>
                <div className='w-8 h-8'></div>
                <span>Contacto</span>
              </Link>
            </li>
          </ul>

          <div className='border-t pt-6 px-4'>
            <button
              onClick={() => {
                setOpen(!open);
                openCart();
              }}
              className='bg-black flex items-center justify-center gap-2 text-zinc-200 font-bold w-full h-12 rounded-md'>
              <FiShoppingCart />
              <span className='uppercase text-xs'>Ver carrito</span>
            </button>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpen(!open)}
        className={`${
          open ? 'opacity-100 pointer-events-auto transition' : 'pointer-events-none opacity-0'
        } md:hidden fixed top-0 left-0 w-screen h-screen duration-200 bg-zinc-900/50 z-20`}></div>
    </div>
  );
};

export default Navbar;
