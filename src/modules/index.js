import { combineReducers } from 'redux';
import auth from './auth';
import schedule from './schedule';
import user from './user';

const rootReducer = combineReducers({
  auth,
  schedule,
  user,
});

export default rootReducer;
