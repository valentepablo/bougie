import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='flex py-6 items-center gap-2 justify-center bg-zinc-200 mt-auto'>
      <h3 className='text-sm uppercase font-semibold'>Bougie Shop</h3>
      <a href='https://www.instagram.com/bougieshopoficial' target='_blank'>
        <BsInstagram />
      </a>
    </footer>
  );
};

export default Footer;
