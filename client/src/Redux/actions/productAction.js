import axios from 'axios';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../constants/BASE_URL';
import { productsActions } from '../reducers/productReducer'
import { filterActions } from '../reducers/filterReducer';

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

export const productsTopSalesAction = ({ category, limit }) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/products/group?${category ? `category=${category}` : "random=true"}${limit ? `&limit=${limit}` : ""}`);
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


export const productsCollectionAction = (query) => {

  return async (dispatch) => {
    try {

      const response = await axios.get(`${BASE_URL}/api/products/collections?${query}`);

      dispatch(filterActions.setPages({
        currentPage: response.data.currentPage || '',
        totalPages: response.data.totalPages || ''
      }));

      if (response.data.mainCategory) {
        dispatch(filterActions.setCategoryOptions({
          categoryOptions: response.data.mainCategory
        }));
        dispatch(filterActions.setPriceDefault({
          priceMinDefault: response.data.minPrice || '',
          priceMaxDefault: response.data.maxPrice || ''
        }));
      }
      dispatch(productsActions.renderProductsList({
        products: response.data.products || [],
      }));
    } catch (err) {
      console.log(err)
      dispatch(
        productsActions.errorAtProductsList({
          message: err
        }));
    };
  };
};
