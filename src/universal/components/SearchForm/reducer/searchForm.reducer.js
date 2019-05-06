import { ADD_SEARCH_VALUE } from '../../../constants/constants';

export const initialState = {
  searchValue: '',
};

export const searchFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH_VALUE:
      return {searchValue: state.searchValue = action.payload};
    default:
      return state;

  }


};

