import { combineReducers } from 'redux';
import auth from './auth';
import schedule from './schedule';
import calendar from './calendar';

const rootReducer = combineReducers({
  auth,
  schedule,
  calendar,
});

export default rootReducer;
