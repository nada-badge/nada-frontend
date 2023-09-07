import { combineReducers } from 'redux';
import auth from './auth';
import activity from './activity';
import headerStatus from './headerStatus';

const rootReducer = combineReducers({
  auth,
  activity,
  headerStatus,
});

export default rootReducer;
