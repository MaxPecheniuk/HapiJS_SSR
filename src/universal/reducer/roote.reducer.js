import { combineReducers } from 'redux';
import { localesReducer } from '../locales/reducer/locales.reducer';

const rootReducer = combineReducers({
  localesReducer
});

export default rootReducer;
