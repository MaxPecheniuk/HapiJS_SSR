import { INCREASE, DECREASE } from '../../../constants/constants';

export const initialState = {
  count: 14,
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
