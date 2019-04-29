import { combineReducers } from 'redux';

import { HomeReducer } from '../components/home/reducer/reducer';

const rootReducer = combineReducers({
  HomeReducer,
});

export default rootReducer;
