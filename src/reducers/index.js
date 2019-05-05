import { combineReducers } from 'redux';

import reportReducer from './reportReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  report: reportReducer,
  user: userReducer,
  cart: cartReducer

})
