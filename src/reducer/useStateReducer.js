import {
  SET_STATE
} from '../constants';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_STATE:
      return state;
    default:
      throw new Error();
  }
};