import { CHANGE_LANGUAGE } from '../../../constants/constants';
//
export const languageActionCreators = (payload) => {
  console.log(payload);
  return {type: CHANGE_LANGUAGE, payload: payload};
};