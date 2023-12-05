import { combineReducers } from 'redux';
import auth from './auth';
import activity from './activity';
import barStatus from './bar';
import schedule from './schedule';
import user from './user';
import modalEvent from './calendar/modalEvent';

const rootReducer = combineReducers({
  auth,
  schedule,
  user,
  modalEvent,
  activity,
  barStatus,
});

export default rootReducer;
