import React from 'react';
import PropTypes from 'prop-types';
import Tree from './Tree';
import Button from './Button';
import { TreeContext } from '../context';
import {
  EXPAND_ONE,
  COLLAPSE_ONE
} from '../constants';

const { useContext } = React;

const Row = ({ data: { name, id, children } }) => {
  const hasChildren = children && children.length;
  const { expandedList, dispatch } = useContext(TreeContext);
  const expanded = expandedList.includes(id);
  const clickHandler = () => {
    const type = expanded ? COLLAPSE_ONE : EXPAND_ONE;

    dispatch({ type, payload: id });
  };
  return (
    <div className="tree-row-wrapper">
      <div className="tree-row">
        <div>{ name }</div>
        { hasChildren && <Button expanded={expanded} clickHandler={clickHandler} /> }
      </div>
      {
        expanded && hasChildren && (
          <Tree data={children} />
        )
      }
    </div>
  );
};

Row.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Row;