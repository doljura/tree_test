import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ expanded, clickHandler }) => (
  <button onClick={clickHandler} >
    { expanded ? '-' : '+'}
  </button>
);

Button.propTypes = {
  expanded: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;