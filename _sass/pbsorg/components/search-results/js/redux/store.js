'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import searchPage from './reducers/search';

// lets us dispatch() functions and log actions
const middleware = process.env.NODE_ENV === 'development' ?
  [thunkMiddleware , createLogger()] :
  [thunkMiddleware];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(searchPage);

export default store;
