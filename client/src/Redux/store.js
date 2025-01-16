import { configureStore } from '@reduxjs/toolkit/react';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { productsListSlice } from './reducers/productReducer';
import { userDataSlice } from './reducers/userReducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  userData: userDataSlice.reducer,
  productsList: productsListSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore(
  {
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  }
);

export const persistor = persistStore(store);