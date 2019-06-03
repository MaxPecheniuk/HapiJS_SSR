import { CHANGE_LANGUAGE, CHECK_LANGUAGE } from '../../../constants/constants';
import getHistory from '../../share.components/GlobalHistory/GlobalHistory';
import * as queryString from 'querystring';

export const initialState = {
  language: '',
};

const pushHistory = (parsed: any) => {
  const stringified = queryString.stringify(parsed);
  getHistory().push({search: stringified});
};

export const languageReducer = (state = initialState, action) => {

  switch (action.type) {

    case CHANGE_LANGUAGE:
      const {parsed, language} = action.payload;
      if (Object.keys(parsed).length > 0) {
        parsed['lang'] = language;
      } else {
        parsed.lang = language;
      }
      pushHistory(parsed);
      window.location.reload();
      return {language: state.language = language};

    case CHECK_LANGUAGE:
      action.payload.parsed.lang = 'en';
      pushHistory(action.payload.parsed);
      return {language: state.language = action.payload.language};

    default:
      return state;
  }
};