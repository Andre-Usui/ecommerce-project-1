import { createStore, combineReducers, applyMiddleware } from 'redux';
//import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import {thunk} from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import { productsListReducer, productReducer } from './reducers/product';

const middleware = thunk;

const persistConfig = {
  key: 'root',
  storage,
  version: 1
}

const rootReducer = combineReducers({
  productsListReducer,
  productReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(middleware)
);

export const persistor = persistStore(store);