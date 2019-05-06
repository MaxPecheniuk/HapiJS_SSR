import { ADD_SEARCH_VALUE } from '../../../constants/constants';

export const searchFormActionCreators = (payload) => {
  console.log(payload);
  return {type: ADD_SEARCH_VALUE, payload: payload}
}
