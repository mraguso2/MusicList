import { combineReducers } from 'redux'; // combineReducers mash all reducers into one big obj
import AuthenticationReducer from '../reducers/authentication';
import ErrorReducer from '../reducers/error';
import ProgressReducer from '../reducers/progress';

const reducers = {
  authentication: AuthenticationReducer,
  error: ErrorReducer,
  progress: ProgressReducer,
};

export default combineReducers(reducers);
