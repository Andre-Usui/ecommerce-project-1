import { createSlice } from '@reduxjs/toolkit';

//list of all products

export const productsListSlice = createSlice({
  name: 'productsList',
  initialState: {
    products: [],
    productsCarousel: [],
    ProductsTopSales: [],
    productDetail: {},
    loading: true,
    loadingCarousel: true,
    loadingTopSales: true,
    message: ''
  },
  reducers: {
    loading(state) {
      state.loading = true;
      state.message = 'loading';
    },
    loadingCarousel(state) {
      state.loadingCaroussel = true;
      state.message = 'loading';
    },
    loadingTopSales(state) {
      state.loadingTopSales = true;
      state.message = 'loading';
    },
    renderProductsList(state, action) {
      state.loading = false;
      state.products = action.payload.products;
      state.message = 'The products list is fetched';
    },
    errorAtProductsList(state, action) {
      state.loading = false;
      state.products = [];
      state.message = `Something is wrong: ${action.payload.message.toString()}`;
    },
    renderProductsCarousel(state, action) {
      state.loadingCarousel = false;
      state.productsCarousel = action.payload.productsCarousel;
      state.message = 'The products list is fetched';
    },
    errorAtProductsCarousel(state, action) {
      state.loadingCarousel = false;
      state.productsCarousel = [];
      state.message = `Something is wrong: ${action.payload.message.toString()}`;
    },
    renderProductsTopSales(state, action) {
      state.loadingTopSales = false;
      state.productsTopSales = action.payload.productsTopSales;
      state.message = 'The products list is fetched';
    },
    errorAtProductsTopSales(state, action) {
      state.loadingTopSales = false;
      state.productsTopSales = [];
      state.message = `Something is wrong: ${action.payload.message.toString()}`;
    },
    renderProductDetail(state, action) {
      state.loading = false
      state.productDetail = action.payload.productDetail;
      state.message = 'The product is fetched';
    },
    errorAtProductDetail(state, action) {
      state.loading = false;
      state.productDetail = {};
      state.message = `Something is wrong: ${action.payload.message.toString()}`;
    },
  }
});



export const productsActions = productsListSlice.actions;
