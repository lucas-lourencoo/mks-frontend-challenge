import { Product } from '../product/types';

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  DECREMENT_PRODUCT_AMOUNT = 'DECREMENT_PRODUCT_AMOUNT',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
  ERASE_ALL_CART = 'ERASE_ALL_CART',
}

export interface ICartItem {
  product: Product;
  amount: number;
}

export interface ICartState {
  items: ICartItem[];
}
