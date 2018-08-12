import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";

import AllReducer from '../Reducer';

const Store = createStore(AllReducer,
  applyMiddleware(thunkMiddleware, logger)
);

export default Store;
