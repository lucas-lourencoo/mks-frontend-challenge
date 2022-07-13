import { Reducer } from '@reduxjs/toolkit';
import produce from 'immer';
import { ActionTypes, Product } from './types';

const INITIAL_STATE: Product[] = [];

export const products: Reducer<Product[]> = (state = INITIAL_STATE, action) => {
  return produce(state, () => {
    switch (action.type) {
      case ActionTypes.GET_PRODUCTS_DATA_SUCCESS: {
        const { products } = action.payload.products;
        return products;
      }

      case ActionTypes.GET_PRODUCTS_DATA_FAILURE: {
        return console.log('Falha ao buscar os produtos');
      }

      default:
        return state;
    }
  });
};

export default products;
