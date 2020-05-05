import React from 'react';
import PropTypes from 'prop-types';

const ToggleAllButton = ({ clickHandler, expanded }) => (
  <button onClick={clickHandler} >
    { expanded ? 'COLLAPSE ALL' : 'EXPAND ALL'}
  </button>
);

ToggleAllButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  expanded: PropTypes.bool
};

export default ToggleAllButton;