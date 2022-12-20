import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer';
import ProductListContainer from './components/ProductListContainer/ProductListContainer';
import CartContainer from './components/Cart/CartContainer';
import { CartProvider } from './context/CartContext';
import ContactPage from './components/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div className='pt-20 min-h-full flex flex-col'>
        <CartProvider>
          <Navbar />
          <CartContainer />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/:categoria' element={<ProductListContainer />} />
            <Route path='/:categoria/:producto' element={<ProductDetailContainer />} />
            <Route path='/contacto' element={<ContactPage />} />
            <Route
              path='*'
              element={<div className='text-center mt-10'>Pagina no encontrada</div>}
            />
          </Routes>
        </CartProvider>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
