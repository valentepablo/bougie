import Navbar from './components/Navbar';
import { db } from './db';

const App = () => {
  return (
    <div>
      <Navbar />
      <ul className='grid grid-cols-2 p-4 gap-4'>
        {db.map((vela) => (
          <div key={vela.nombre} className='border border-zinc-200 p-2'>
            <img src={vela.imagen} alt='Vela artesanal' />
            <p className='text-xl font-semibold'>{vela.nombre}</p>
            <p className='text-zinc-500'>Color: {vela.color}</p>
            {vela.aroma !== null && <p className='text-zinc-500'>Aroma: {vela.aroma}</p>}
            <p className='uppercase text-xs mt-2 bg-zinc-200 max-w-max p-1'>{vela.linea}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
