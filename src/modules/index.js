import { combineReducers } from 'redux';
import auth from './auth';
import schedule from './schedule';
import user from './user';
import calendar from './calendar';

const rootReducer = combineReducers({
  auth,
  schedule,
  user,
  calendar,
});

export default rootReducer;
