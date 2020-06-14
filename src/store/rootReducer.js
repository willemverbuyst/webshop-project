import { combineReducers } from 'redux';
import productReducer from './product/reducer';
import cartReducer from './cart/reducer';
import authReducer from './auth/reducer';
import darkModeReducer from './darkMode/reducer';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  auth: authReducer,
  darkMode: darkModeReducer,
});

export default rootReducer;
