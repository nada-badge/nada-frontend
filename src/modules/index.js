import { combineReducers } from 'redux';
import auth from './auth';
import activity from './ManageActivity';
import barStatus from './barStatus';
import calendar from './calendar';

const rootReducer = combineReducers({
  auth,
  activity,
  barStatus,
  calendar,
});

export default rootReducer;
