import BackButton from '../BackButton';
import Section from '../Section/Section';
import SectionBody from '../Section/SectionBody';
import SectionHeader from '../Section/SectionHeader';
import SectionTitle from '../Section/SectionTitle';
import ProductItem from './ProductItem';

const ProductList = ({ productos, categoria }) => {
  return (
    <>
      <Section>
        <SectionHeader>
          <SectionTitle text={categoria} />
          <BackButton />
        </SectionHeader>
        <SectionBody>
          <ul className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {productos &&
              productos.map((product) => (
                <ProductItem key={product.categoryId} product={product} />
              ))}
          </ul>
        </SectionBody>
      </Section>
    </>
  );
};

export default ProductList;
