import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route  path='/' element={<Main />} />
          <Route  path='/detail/:id' element={<ProductDetail />} />
          <Route  path='/login' element={<Login type="login"/>} />
          <Route  path='/register' element={<Login type="register"/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
