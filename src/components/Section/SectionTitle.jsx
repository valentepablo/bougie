const SectionTitle = ({ text }) => {
  return (
    <h2 className='capitalize tracking-wide text-lg text-slate-200 font-bold'>
      {text.split('-').join(' ')}
    </h2>
  );
};

export default SectionTitle;
