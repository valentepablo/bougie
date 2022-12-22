import 'tw-elements';
import Carousel from '../Carousel/Carousel';
import Section from '../Section/Section';
import SectionHeader from '../Section/SectionHeader';
import SectionBody from '../Section/SectionBody';
import SectionTitle from '../Section/SectionTitle';
import SectionFooter from '../Section/SectionFooter';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Carousel />

      <Section>
        <SectionHeader>
          <SectionTitle text='Línea navideña' />
        </SectionHeader>
        <SectionBody>
          <div className='grid md:grid-cols-3 gap-2 md:gap-6'>
            <Link to='/velas/navidad' className='relative md:col-span-2'>
              <img
                src='../images/navidad02.jpg'
                alt='Lineas de productos'
                className='rounded-md h-96 aspect-square object-cover w-full'
              />
              <h3 className='text-white drop-shadow-md bg-black/60 py-1 uppercase font-bold absolute bottom-5 inset-x-0 text-center'>
                Línea navideña
              </h3>
            </Link>
            <div className='flex flex-col justify-center gap-6'>
              <h2 className='mt-2 md:mt-0 text-2xl font-extrabold text-center text-zinc-800'>
                Velas de frascos con diseños únicos por esta{' '}
                <span className='text-green-600 font-bold'>navidad</span>!
              </h2>
              <p className='text-sm text-center w-3/4 mx-auto text-zinc-500'>
                Aprovechá esta oportunidad y regalá velas navideñas en estas fiestas.
              </p>
              <Link to='/velas/navidad' className='flex items-center justify-center'>
                <button className='bg-black px-6 mb-6 uppercase text-xs lg:text-base text-zinc-200 font-bold h-12 md:h-16 rounded-md'>
                  Ver línea completa
                </button>
              </Link>
            </div>
          </div>
        </SectionBody>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle text='Nuestros productos' />
        </SectionHeader>
        <SectionBody>
          <div className='grid gap-8 md:grid-cols-3'>
            <Link to='/velas' className='relative'>
              <img
                src='../images/frascos.jpg'
                alt='Lineas de productos'
                className='rounded-md h-96 aspect-square object-cover w-full'
              />
              <h3 className='text-white drop-shadow-md bg-black/60 py-1 uppercase font-bold absolute bottom-5 inset-x-0 text-center'>
                Velas
              </h3>
            </Link>
            <Link to='/difusores' className='relative'>
              <img
                src='../images/difusores.jpg'
                alt='Lineas de productos'
                className='rounded-md h-96 aspect-square object-cover w-full'
              />
              <h3 className='text-white drop-shadow-md bg-black/60 py-1 uppercase font-bold absolute bottom-5 inset-x-0 text-center'>
                Difusores
              </h3>
            </Link>
            <Link to='/home-spray' className='relative'>
              <img
                src='../images/home-spray.jpg'
                alt='Lineas de productos'
                className='rounded-md h-96 aspect-square object-cover w-full'
              />
              <h3 className='text-white drop-shadow-md bg-black/60 py-1 uppercase font-bold absolute bottom-5 inset-x-0 text-center'>
                Home Spray
              </h3>
            </Link>
          </div>
        </SectionBody>
      </Section>
    </>
  );
};

export default HomePage;
