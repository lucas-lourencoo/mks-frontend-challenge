import { Reducer } from '@reduxjs/toolkit';
import produce from 'immer';
import { ActionTypes, ICartState } from './types';

const initialState: ICartState = { items: [] };

export const cart: Reducer<ICartState> = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.ADD_PRODUCT_TO_CART: {
        const { product } = action.payload;

        const productCartIndex = state.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productCartIndex >= 0) {
          draft.items[productCartIndex].amount++;
        } else {
          draft.items.push({ product, amount: 1 });
        }

        break;
      }

      case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
        const { productId } = action.payload;

        const index = draft.items.findIndex(
          (item) => item.product.id === productId
        );
        draft.items.splice(index, 1);
        break;
      }

      case ActionTypes.DECREMENT_PRODUCT_AMOUNT: {
        const { productId } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === productId
        );

        if (draft.items[productInCartIndex].amount > 1) {
          draft.items[productInCartIndex].amount--;
        } else {
          draft.items.splice(productInCartIndex, 1);
        }

        break;
      }

      case ActionTypes.ERASE_ALL_CART: {
        draft.items = [];
        break;
      }

      default:
        return state;
    }
  });
};

export default cart;
