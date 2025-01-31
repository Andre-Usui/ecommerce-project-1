import { createSlice } from '@reduxjs/toolkit';
import { filterActions } from './filterReducer';
//list of all products

const productsListSlice = createSlice({
  name: 'productsList',
  initialState: {
    products: [],
    productsCarousel: [],
    productsTopSales: [],
    productDetail: {},
    loading: 'true',
    loadingCarousel: 'true',
    loadingTopSales: 'true',
    loadingDetail: 'true',
    message: '',
  },
  reducers: {
    loadingList(state) {
      state.loading = 'true';
    },
    loadingCarousel(state) {
      state.loadingCarousel = 'true';
    },
    loadingTopSales(state) {
      state.loadingTopSales = 'true';
    },
    loadingDetail(state) {
      state.loadingDetail = 'true';
    },
    renderProductsList(state, action) {
      state.loading = 'false';
      state.products = action.payload.products;
    },
    errorAtProductsList(state, action) {
      state.loading = 'false';
      state.products = [];
    },
    renderProductsCarousel(state, action) {
      state.loadingCarousel = 'false';
      state.productsCarousel = action.payload.productsCarousel;
    },
    errorAtProductsCarousel(state, action) {
      state.loadingCarousel = 'false';
      state.productsCarousel = [];
    },
    renderProductsTopSales(state, action) {
      state.loadingTopSales = 'false';
      state.productsTopSales = action.payload.productsTopSales;
    },
    errorAtProductsTopSales(state, action) {
      state.loadingTopSales = 'false';
      state.productsTopSales = [];
    },
    renderProductDetail(state, action) {
      state.loadingDetail = 'false'
      state.productDetail = action.payload.productDetail;
    },
    errorAtProductDetail(state, action) {
      state.loadingDetail = 'false';
      state.productDetail = {};
    },
  }

});



export default productsListSlice.reducer;
export const productsActions = productsListSlice.actions;
