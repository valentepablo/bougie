import 'tw-elements';
import Carousel from '../Carousel/Carousel';

import ProductListContainer from '../ProductListContainer/ProductListContainer';
import Section from '../Section/Section';
import SectionHeader from '../Section/SectionHeader';
import SectionTitle from '../Section/SectionTitle';
import SectionFooter from '../Section/SectionFooter';
import { Link } from 'react-router-dom';
import SectionBody from '../Section/SectionBody';

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
            <div className='relative'>
              <img src='../images/cuenco.jpg' alt='Lineas de productos' className='rounded-md' />
              <h3 className='uppercase font-bold absolute bottom-5 inset-x-0 text-center'>
                Velas de cuenco
              </h3>
            </div>
            <div className='relative'>
              <img src='../images/lavanda.jpg' alt='Lineas de productos' className='rounded-md' />
              <h3 className='uppercase font-bold absolute bottom-5 inset-x-0 text-center'>
                Velas de frasco
              </h3>
            </div>
          </div>
        </SectionBody>
      </Section>

      <Section>
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
      </Section>
    </>
  );
};

export default HomePage;
