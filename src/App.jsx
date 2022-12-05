import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage.jsx/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
