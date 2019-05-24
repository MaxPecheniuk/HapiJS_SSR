import { CHANGE_LANGUAGE } from '../../constants/constants';

export const localesActionCreators = (payload) => {
  return {type: CHANGE_LANGUAGE, payload: payload};
}
