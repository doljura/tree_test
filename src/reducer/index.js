import {
  EXPAND_ONE,
  COLLAPSE_ONE,
  EXPAND_ALL,
  COLLAPSE_ALL
} from '../constants';

const init = (ids = []) => {
  return [...ids];
};

export const reducer = (state, action) => {
  switch (action.type) {
    case EXPAND_ONE:
      return [...state, action.payload];
    case COLLAPSE_ONE:
      return state.filter(item => item !== action.payload);
    case EXPAND_ALL:
      return init(action.payload);
    case COLLAPSE_ALL:
      return init();
    default:
      throw new Error();
  }
};