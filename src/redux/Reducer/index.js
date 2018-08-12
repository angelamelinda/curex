import { combineReducers } from 'redux';

import { Currency } from './reducer_currency.js';
import { Convertion } from './reducer_convertion.js';

const AllReducer = combineReducers({
  Currency,
  Convertion
})

export default AllReducer;
