import Filtros from './components/Filtros';
import Navbar from './components/Navbar/Navbar';
import ProductListContainer from './components/ProductListContainer/ProductListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Filtros />
        <Routes>
          <Route path='/' element={<ProductListContainer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
