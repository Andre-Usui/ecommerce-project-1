import axios from 'axios';

import { BASE_URL } from '../constants/BASE_URL';
import { productsActions } from '../reducers/productReducer'

export const productsListAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/products/num/8`);
      console.log(data);
      dispatch(
        productsActions.renderProductsList({
          products: data || [],
        })
      );
    } catch (error) {
      dispatch(
        productsActions.errorAtProductsList({
          message: error,
        }))
    }
  };
}

export const productsCollectionAction = ({query}) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/products/collections?${query}`);
      console.log(data);
      dispatch(
        productsActions.renderProductsList({
          products: data || [],
        })
      );
    } catch (error) {
      dispatch(
        productsActions.errorAtProductsList({
          message: error,
        }))
    }
  };
};

export const productsCarouselAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/products/group?random=true&limit=2`);
      console.log(data);
      dispatch(
        productsActions.renderProductsCarousel({
          productsCarousel: data || [],
        })
      );
    } catch (error) {
      dispatch(
        productsActions.errorAtProductsCarousel({
          message: error,
        }))
    }
  };
};

export const productsTopSalesAction = ({category, limit}) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/products/group?${category?`category=${category}` : "random=true"}${limit?`&limit=${limit}`:""}`);
      console.log(data);
      dispatch(
        productsActions.renderProductsTopSales({
          productsTopSales: data || [],
        })
      );
    } catch (error) {
      dispatch(
        productsActions.errorAtProductsTopSales({
          message: error,
        }))
    }
  };
};

export const productDetailAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/products/${id}`);
      console.log(data);
      dispatch(
        productsActions.renderProductDetail({
          productDetail: data || {},
          loading: false
        })
      );
    } catch (error) {
      dispatch(
        productsActions.errorAtProductDetail({
          message: error,
        }))
    }
  };
}