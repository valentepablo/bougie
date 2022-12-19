import { BsInstagram } from 'react-icons/bs';
import Section from '../Section/Section';
import SectionBody from '../Section/SectionBody';
import SectionHeader from '../Section/SectionHeader';
import SectionTitle from '../Section/SectionTitle';
import ContactUs from './ContactUs';

const ContactPage = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle text='Contactanos' />
      </SectionHeader>
      <SectionBody>
        <ContactUs />
        <div className='border-t my-3'></div>
        <div className='text-zinc-600 text-sm'>
          <p className='flex items-center justify-center gap-1'>
            Encontranos tambien en{' '}
            <a
              href='https://www.instagram.com/bougieshopoficial'
              target='_blank'
              className='font-extrabold underline flex items-center gap-1'>
              Instagram
              <span>
                <BsInstagram />
              </span>
            </a>
          </p>
        </div>
      </SectionBody>
    </Section>
  );
};

export default ContactPage;
