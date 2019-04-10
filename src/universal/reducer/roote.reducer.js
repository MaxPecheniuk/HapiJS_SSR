import { combineReducers } from 'redux';

import { HomeReducer } from '../components/Home/reducer';

const rootReducer = combineReducers({
  HomeReducer,
});

export default rootReducer;
