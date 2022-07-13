import { ActionTypes, Product } from './types';

export function getProductDataRequest() {
  return {
    type: ActionTypes.GET_PRODUCTS_DATA_REQUEST,
  };
}

export function getProductDataSuccess(products: Product[]) {
  return {
    type: ActionTypes.GET_PRODUCTS_DATA_SUCCESS,
    payload: {
      products,
    },
  };
}

export function getProductDataFailure() {
  return {
    type: ActionTypes.GET_PRODUCTS_DATA_FAILURE,
  };
}
