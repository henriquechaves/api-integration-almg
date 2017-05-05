import { HANDLE_SEARCH } from '../constants';

export const fetchData = (dataSearch) => {
  return {
    type: HANDLE_SEARCH,
    dataSearch,
  };
};