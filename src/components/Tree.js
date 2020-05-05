import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const Tree = ({ data }) => (
  <div className="tree">
    {
      data.map(item => (
        <Row data={item} key={item.id} />
      ))
    }
  </div>
);

Tree.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default Tree;