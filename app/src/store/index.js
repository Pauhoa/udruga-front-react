import { createStore, compose, applyMiddleware } from 'redux';

import reducer from '../reducers';
import loginMiddleware from '../middlewares/login';
import createEventMiddleware from '../middlewares/createEvent';
import signinMiddleware from '../middlewares/signin';

const middlewares = [loginMiddleware, createEventMiddleware, signinMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;
