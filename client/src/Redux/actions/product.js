import axios from 'axios';
import {
  PRODUCT_LIST_REQ,
  PRODUCT_LIST_REQ_SUCCESS,
  PRODUCT_LIST_REQ_FAIL,
  PRODUCT_DETAIL_REQ,
  PRODUCT_DETAIL_REQ_SUCCESS,
  PRODUCT_DETAIL_REQ_FAIL
} from '../constants/product';
import { BASE_URL } from '../constants/BASE_URL';

export const productsListAction = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQ });
    const { data } = await axios.get(`${BASE_URL}/api/products/`);
    dispatch({ type: PRODUCT_LIST_REQ_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_REQ_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
};


export const productAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAIL_REQ });
    const { data } = await axios.get(`${BASE_URL}/api/products/${id}`);
    dispatch({ type: PRODUCT_DETAIL_REQ_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: PRODUCT_DETAIL_REQ_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
};