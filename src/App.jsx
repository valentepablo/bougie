import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage.jsx/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer';

const App = () => {
  return (
    <Router>
      <div className='pt-20'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/velas/:nombre' element={<ProductDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
