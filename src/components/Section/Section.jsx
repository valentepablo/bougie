const Section = ({ children }) => {
  return (
    <section className='mx-4 my-4 md:my-12 rounded-md overflow-hidden'>
      <article className='max-w-7xl mx-auto'>{children}</article>
    </section>
  );
};

export default Section;
