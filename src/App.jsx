import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage.jsx/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer';
import ProductListContainer from './components/ProductListContainer/ProductListContainer';
import CartContainer from './components/Cart/CartContainer';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <Router>
      <div className='pt-20'>
        <CartProvider>
          <Navbar />
          <CartContainer />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/productos/:categoria' element={<ProductListContainer />} />
            <Route path='/productos/velas/:nombre' element={<ProductDetailContainer />} />
            <Route path='/productos/difusores/:nombre' element={<ProductDetailContainer />} />
            <Route path='/productos/home-spray/:nombre' element={<ProductDetailContainer />} />
            <Route path='*' element={<div className='text-white'>Pagina no encontrada</div>} />
          </Routes>
        </CartProvider>
      </div>
    </Router>
  );
};

export default App;
