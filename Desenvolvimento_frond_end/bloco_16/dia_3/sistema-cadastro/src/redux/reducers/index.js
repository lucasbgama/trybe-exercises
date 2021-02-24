import { combineReducers } from 'redux';
import accountsReducer from './accounts';
import customersReducer from './customers';

const rootReducer = combineReducers({
  accounts: accountsReducer,
  customers: customersReducer,
});

export default rootReducer;
