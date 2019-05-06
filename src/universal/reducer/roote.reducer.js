import { combineReducers } from 'redux';
import { searchFormReducer } from '../components/SearchForm/reducer/searchForm.reducer';

const rootReducer = combineReducers({
  searchFormReducer,
});

export default rootReducer;
