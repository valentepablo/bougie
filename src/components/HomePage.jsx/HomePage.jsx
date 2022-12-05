import 'tw-elements';
import Carousel from '../Carousel/Carousel';
import Filtros from '../Filtros';

import ProductListContainer from '../ProductListContainer/ProductListContainer';
import Section from '../Section/Section';
import SectionHeader from '../Section/SectionHeader';
import SectionTitle from '../Section/SectionTitle';

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
      </Section>
    </>
  );
};

export default HomePage;
