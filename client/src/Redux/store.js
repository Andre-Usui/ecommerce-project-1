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
import productReducer from './reducers/productReducer';
import userDataReducer, { userDataSlice } from './reducers/userReducer';
import filterReducer, { filterSlice } from './reducers/filterReducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [userDataSlice.reducerPath, filterSlice.reducerPath]
}

const rootReducer = combineReducers({
  userData: userDataReducer,
  productsList: productReducer,
  filter: filterReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore(
  {
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER],
        },
      }),
  }
);

export const persistor = persistStore(store);
