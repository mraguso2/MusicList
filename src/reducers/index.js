import { combineReducers } from 'redux'; // combineReducers mash all reducers into one big obj
import AuthenticationReducer from '../reducers/authentication';
import ProgressReducer from '../reducers/progress';

const reducers = {
  authentication: AuthenticationReducer,
  progress: ProgressReducer,
};

export default combineReducers(reducers);
