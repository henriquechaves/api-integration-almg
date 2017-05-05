import { HANDLE_SEARCH } from '../constants';

const INITIAL_STATE = {
  dataSearch: null,
};

const fetchSearch =  (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case HANDLE_SEARCH:
    return {
      ...state,
      dataSearch: action.dataSearch,
    };
  default:
    return state;
  }
};

export default fetchSearch;