import { combineReducers } from 'redux';
import { languageReducer } from '../components/LanguageToggle/reducer/LanguageToggle.reducer';
// import { localesReducer } from '../locales/reducer/locales.reducer';

const rootReducer = combineReducers({
  languageReducer
});

export default rootReducer;
