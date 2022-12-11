import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage.jsx/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer';
import ProductListContainer from './components/ProductListContainer/ProductListContainer';

const App = () => {
  return (
    <Router>
      <div className='pt-20'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/productos/:categoria' element={<ProductListContainer />} />
          <Route path='/productos/velas/:nombre' element={<ProductDetailContainer />} />
          <Route path='*' element={<div className='text-white'>Pagina no encontrada</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
