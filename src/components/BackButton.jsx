import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className='text-zinc-300 font-bold uppercase flex items-center gap-1'
      onClick={() => navigate(-1)}>
      <HiOutlineArrowNarrowLeft />
      <span className='text-xs'>Volver</span>
    </button>
  );
};

export default BackButton;
