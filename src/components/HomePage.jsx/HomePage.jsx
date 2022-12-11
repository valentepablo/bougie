import 'tw-elements';
import Carousel from '../Carousel/Carousel';
import Section from '../Section/Section';
import SectionHeader from '../Section/SectionHeader';
import SectionBody from '../Section/SectionBody';
import SectionTitle from '../Section/SectionTitle';
import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';

const HomePage = () => {
  return (
    <>
      <Carousel />

      <Section>
        <SectionHeader>
          <SectionTitle text='Nuestros productos' />
        </SectionHeader>
        <SectionBody>
          <div className='grid gap-4'>
            <Link to='/productos/velas' className='relative'>
              <img src='../images/cuenco.jpg' alt='Lineas de productos' className='rounded-md' />
              <h3 className='text-white drop-shadow-md uppercase font-bold absolute bottom-5 inset-x-0 text-center'>
                Velas
              </h3>
            </Link>
            <Link to='/productos/difusores' className='relative'>
              <img src='../images/difusores.jpg' alt='Lineas de productos' className='rounded-md' />
              <h3 className='text-white drop-shadow-md uppercase font-bold absolute bottom-5 inset-x-0 text-center'>
                Difusores
              </h3>
            </Link>
            <Link to='/productos/home-spray' className='relative'>
              <img
                src='../images/home-spray.jpg'
                alt='Lineas de productos'
                className='rounded-md'
              />
              <h3 className='text-white drop-shadow-md uppercase font-bold absolute bottom-5 inset-x-0 text-center'>
                Home Spray
              </h3>
            </Link>
          </div>
        </SectionBody>
      </Section>

      <footer className='flex p-4 items-center gap-4 justify-center'>
        <h3 className='text-sm'>Bougie Shop</h3>
        <BsInstagram />
      </footer>

      {/* <Section>
        <SectionHeader>
          <SectionTitle text='Velas destacadas' />
        </SectionHeader>
        <SectionBody>
          <ProductListContainer />
        </SectionBody>
        <SectionFooter>
          <Link
            to='/velas'
            className='text-xs uppercase font-bold text-zinc-600 pt-3 pb-2 text-center block'>
            Ver mas
          </Link>
        </SectionFooter>
      </Section> */}
    </>
  );
};

export default HomePage;
