import { combineReducers } from 'redux';
import auth from './auth';
import activity from './activity';
import barStatus from './barStatus';

const rootReducer = combineReducers({
  auth,
  activity,
  barStatus,
});

export default rootReducer;
