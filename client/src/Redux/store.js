import { configureStore } from '@reduxjs/toolkit/react'
import { productsListSlice } from './reducers/productReducer';



export const store = configureStore(
  {
    reducer: {productsList: productsListSlice.reducer},
  }
);
