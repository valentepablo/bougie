import BackButton from '../BackButton';
import Filtros from '../Filtros';
import Section from '../Section/Section';
import SectionBody from '../Section/SectionBody';
import SectionHeader from '../Section/SectionHeader';
import SectionTitle from '../Section/SectionTitle';
import ProductItem from './ProductItem';

const ProductList = ({ productos, categoria }) => {
  return (
    <>
      <div className='pt-4 px-4 flex items-center justify-between'>
        <BackButton />
        {/* <Filtros productos={productos} setAromaElegido={setAromaElegido} /> */}
      </div>

      <Section>
        <SectionHeader>
          <SectionTitle text={categoria} />
        </SectionHeader>
        <SectionBody>
          <ul className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {productos.map((product) => (
              <ProductItem key={product.categoryId} product={product} />
            ))}
          </ul>
        </SectionBody>
      </Section>
    </>
  );
};

export default ProductList;
