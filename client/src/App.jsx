import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate 
} from 'react-router-dom';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductsList from './pages/Main/ProductsList';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<ProductsList />} />
          <Route exact path='/detail/' element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
