import { combineReducers } from 'redux';
import auth from './auth';
import activity from './ManageActivity';
import barStatus from './barStatus';
import schedule from './schedule';
import calendar from './calendar';

const rootReducer = combineReducers({
  auth,
  schedule,
  calendar,
  activity,
  barStatus,
});

export default rootReducer;
