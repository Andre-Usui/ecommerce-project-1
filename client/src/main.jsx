import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store.js';
import { PersistGate } from 'redux-persist/integration/react'

import './index.css';
import './pages/ProductCollection/Filter/FilterPriceSlider.css'
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
);
