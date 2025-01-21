import axios from 'axios';

import { BASE_URL } from '../constants/BASE_URL';
import { productsActions } from '../reducers/productReducer'

export const productsListAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/products/num/8`);

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