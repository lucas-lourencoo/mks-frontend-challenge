export enum ActionTypes {
  GET_PRODUCTS_DATA_REQUEST = 'GET_PRODUCTS_DATA_REQUEST',
  GET_PRODUCTS_DATA_SUCCESS = 'GET_PRODUCTS_DATA_SUCCESS',
  GET_PRODUCTS_DATA_FAILURE = 'GET_PRODUCTS_DATA_FAILURE',
}

export type Product = {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
};
