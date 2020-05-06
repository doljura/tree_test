import React from 'react';
import PropTypes from 'prop-types';
import Rows from './Rows';
import Button from './Button';
import { TreeContext } from '../context';

const { useContext } = React;

const Row = ({ data: { name, id, children } }) => {
  const hasChildren = children && children.length;
  const { expandedList } = useContext(TreeContext);
  const expanded = expandedList.includes(id);

  return (
    <div className="tree-row-wrapper">
      <div className="tree-row">
        <div>{ name }</div>
        { hasChildren && <Button expanded={expanded} id={id} /> }
      </div>
      {
        expanded && hasChildren && (
          <Rows data={children} />
        )
      }
    </div>
  );
};

Row.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Row;