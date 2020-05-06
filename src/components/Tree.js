import React from 'react';
import PropTypes from 'prop-types';
import Rows from './Rows';
import { TreeContext } from '../context';
import { reducer } from '../reducer/treeReducer';
import ToggleAllButton from './ToggleAllButton';

const { useReducer } = React;

const Tree = ({ data }) => {
  const [expandedList, dispatch] = useReducer(reducer, []);

  return (
    <div className="tree-wrapper">
      <TreeContext.Provider value={{
        expandedList,
        dispatch
      }}>
        <Rows data={data} />
        <div>
          <ToggleAllButton data={data} />
        </div>
      </TreeContext.Provider>
    </div>
  );
};

Tree.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default Tree;