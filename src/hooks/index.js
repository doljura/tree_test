import React from 'react';
import { UseStateExampleContext } from '../context';
import { SET_STATE } from '../constants';

const { useContext } = React;

export const useState = (initialState = null) => {
  const { state, dispatch } = useContext(UseStateExampleContext);
  const setState = state => dispatch({ type: SET_STATE, payload: state});

  setState(initialState);

  return [state, setState];
};