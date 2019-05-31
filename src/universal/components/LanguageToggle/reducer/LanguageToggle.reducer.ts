import { CHANGE_LANGUAGE } from '../../../constants/constants';
import getHistory from '../../../Hh';
import * as queryString from 'querystring';

export const initialState = {
  language: 'ru',
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      console.log(action.payload.parsed);
      if (Object.keys(action.payload.parsed).length > 0) {
        action.payload.parsed['lang'] = action.payload.language;
      } else {
        action.payload.parsed.lang = action.payload.language;
      }
      const stringified = queryString.stringify(action.payload.payload);
      getHistory().push({search: stringified});
      // window.location.reload();
      return {language: state.language = action.payload};
    default:
      return state;
  }
};