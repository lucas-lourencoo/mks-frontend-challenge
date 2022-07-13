import { applyMiddleware, legacy_createStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
