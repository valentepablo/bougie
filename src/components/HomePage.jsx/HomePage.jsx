import 'tw-elements';
import Carousel from '../Carousel/Carousel';
import Filtros from '../Filtros';

import ProductListContainer from '../ProductListContainer/ProductListContainer';
import Section from '../Section/Section';
import SectionTitle from '../Section/SectionTitle';

const HomePage = () => {
  return (
    <>
      <Carousel />
      <Section>
        <div className='flex items-center justify-between mb-3'>
          <SectionTitle text='Productos destacados' />
          <Filtros />
        </div>
        <ProductListContainer />
      </Section>
    </>
  );
};

export default HomePage;
