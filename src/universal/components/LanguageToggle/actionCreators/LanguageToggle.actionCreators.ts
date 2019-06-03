import { CHANGE_LANGUAGE, CHECK_LANGUAGE } from '../../../constants/constants';
//
export const changeLanguageActionCreators = (payload) => {
  return {type: CHANGE_LANGUAGE, payload: payload};
};
export const checkLanguageActionCreators = (payload) => {
  return {type: CHECK_LANGUAGE, payload: payload};
};
