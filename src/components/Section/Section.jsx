const Section = ({ children }) => {
  return (
    <section className='mx-4 my-10 max-w-7xl md:mx-auto px-2 rounded-md overflow-hidden shadow-lg'>
      {children}
    </section>
  );
};

export default Section;
