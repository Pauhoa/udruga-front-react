import { createStore, compose, applyMiddleware } from 'redux';

import reducer from '../reducers';
import loginMiddleware from '../middlewares/login';
import signinMiddleware from '../middlewares/signin';
import createEventMiddleware from '../middlewares/createEvent';
import createAssoMiddleware from '../middlewares/createAsso';

const middlewares = [
  loginMiddleware,
  signinMiddleware,
  createEventMiddleware,
  createAssoMiddleware,
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;
