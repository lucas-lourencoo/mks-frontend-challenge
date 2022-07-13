import { Product } from '../product/types';
import { ActionTypes } from './types';

export function addProductToCart(product: Product) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      product,
    },
  };
}

export function decrementProductAmount(productId: number) {
  return {
    type: ActionTypes.DECREMENT_PRODUCT_AMOUNT,
    payload: {
      productId,
    },
  };
}

export function removeProductOfCart(productId: number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      productId,
    },
  };
}

export function eraseAllCart() {
  return {
    type: ActionTypes.ERASE_ALL_CART,
  };
}
