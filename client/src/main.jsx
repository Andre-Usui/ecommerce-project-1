import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate 
} from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ProductDetail from './pages/ProductDetail/ProductDetail.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/detail/' element={<ProductDetail />} />
      </Routes>
    </Router>
  </StrictMode>,
);
