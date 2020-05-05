import React from 'react';
import PropTypes from 'prop-types';
import {
  EXPAND_ONE,
  COLLAPSE_ONE
} from '../constants';
import { TreeContext } from '../context';

const { useContext } = React;

const Button = ({ expanded, id }) => {
  const { dispatch } = useContext(TreeContext);
  const clickHandler = () => {
    const type = expanded ? COLLAPSE_ONE : EXPAND_ONE;

    dispatch({ type, payload: id });
  };
  return (
    <button onClick={clickHandler} >
      { expanded ? '-' : '+'}
    </button>
  );
}

Button.propTypes = {
  expanded: PropTypes.bool,
  id: PropTypes.string.isRequired
};

export default Button;