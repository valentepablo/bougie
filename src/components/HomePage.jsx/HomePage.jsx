import 'tw-elements';
import Carousel from '../Carousel/Carousel';
import Filtros from '../Filtros';

import ProductListContainer from '../ProductListContainer/ProductListContainer';
import Section from '../Section/Section';
import SectionHeader from '../Section/SectionHeader';
import SectionTitle from '../Section/SectionTitle';
import SectionFooter from '../Section/SectionFooter';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Carousel />
      <Section>
        <SectionHeader>
          <SectionTitle text='Productos destacados' />
          <Filtros />
        </SectionHeader>
        <ProductListContainer />
        <SectionFooter>
          <Link to='/velas' className='text-sm font-semibold'>
            Ver mas
          </Link>
        </SectionFooter>
      </Section>
    </>
  );
};

export default HomePage;
