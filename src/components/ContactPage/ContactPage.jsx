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
      </SectionBody>
    </Section>
  );
};

export default ContactPage;
