import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import UserSettings from './pages/UserSettings/UserSettings';
import ProductCollection from './pages/ProductCollection/ProductCollection';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route  path='/' element={<Main />} />
          <Route  path='/detail/:id' element={<ProductDetail />} />
          <Route  path='/login' element={<Login type="login"/>} />
          <Route  path='/register' element={<Login type="register"/>} />
          <Route  path='/profile' element={<UserSettings />} />
          <Route  path='/collections' element={<ProductCollection />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
