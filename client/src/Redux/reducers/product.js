import {
  PRODUCT_LIST_REQ,
  PRODUCT_LIST_REQ_SUCCESS,
  PRODUCT_LIST_REQ_FAIL,
  PRODUCT_DETAIL_REQ,
  PRODUCT_DETAIL_REQ_SUCCESS,
  PRODUCT_DETAIL_REQ_FAIL
} from '../constants/product';

//list of all products
export const productsListReducer = (state = { products: [] }, action) => {

  switch (action.type) {
    case PRODUCT_LIST_REQ:
      return {
        ...state,
        loading: true, products: []
      };
    case PRODUCT_LIST_REQ_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        totalPage: action.payload.totalPage,
        page: action.payload.page
      };
    case PRODUCT_LIST_REQ_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state
  }
};


// single product by id
export const productReducer = (state = { products: {reviews: []} }, action) => {

  switch (action.type) {
    case PRODUCT_DETAIL_REQ:
      return {
        loading: true, ...state
      };
    case PRODUCT_DETAIL_REQ_SUCCESS:
      return {
        loading: false,
        product: action.payload
      };
    case PRODUCT_DETAIL_REQ_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state
  }
};