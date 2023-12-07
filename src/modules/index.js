import { combineReducers } from 'redux';
import auth from './auth';
import activity from './activity';
import barStatus from './bar';
import schedule from './schedule';
import user from './user';
import filter from './filter';

const rootReducer = combineReducers({
  auth,
  schedule,
  user,
  activity,
  barStatus,
  filter,
});

export default rootReducer;
