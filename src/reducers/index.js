import { combineReducers } from 'redux'; // combineReducers mash all reducers into one big obj
import AlbumsReducer from '../reducers/albums';
import AuthenticationReducer from '../reducers/authentication';
import ErrorReducer from '../reducers/error';
import ProgressReducer from '../reducers/progress';
import User from '../reducers/user';

const reducers = {
  albums: AlbumsReducer,
  authentication: AuthenticationReducer,
  error: ErrorReducer,
  progress: ProgressReducer,
  user: User,
};

export default combineReducers(reducers);
