import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { getProductDataFailure, getProductDataSuccess } from './actions';
import { ActionTypes } from './types';

function* getProductsData() {
  try {
    const { data } = yield call(
      api.get,
      '/products?page=1&rows=8&sortBy=name&orderBy=ASC'
    );

    yield put(getProductDataSuccess(data));
  } catch (err) {
    yield put(getProductDataFailure());
  }
}

export default all([
  takeLatest(ActionTypes.GET_PRODUCTS_DATA_REQUEST, getProductsData),
]);
