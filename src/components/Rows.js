import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const Rows = ({ data }) => (
  <div className="rows">
    {
      data.map(item => (
        <Row data={item} key={item.id} />
      ))
    }
  </div>
);

Rows.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default Rows;