// combineReducers mash all reducers into one big obj
// createStore wires that object up into the store
import { combineReducers, createStore } from 'redux';

import ProgressReducer from '../reducers/progress';

const combinedReducers = combineReducers({
  progress: ProgressReducer,
});

// create store
const Store = createStore(combinedReducers);

export default Store;
