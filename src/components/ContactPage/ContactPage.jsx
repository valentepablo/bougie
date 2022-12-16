import Section from '../Section/Section';
import SectionBody from '../Section/SectionBody';
import SectionHeader from '../Section/SectionHeader';
import SectionTitle from '../Section/SectionTitle';
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle text='Contactanos' />
      </SectionHeader>
      <SectionBody>
        <ContactForm />
      </SectionBody>
    </Section>
  );
};

export default ContactPage;
