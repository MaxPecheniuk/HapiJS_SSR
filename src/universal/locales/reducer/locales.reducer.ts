import { CHANGE_LANGUAGE } from '../../constants/constants';

export const initialState = {
  language: 'ru',
};

export const localesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {language: state.language = action.payload};
    default:
      return state;
  }
};