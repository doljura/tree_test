import React from 'react';
import PropTypes from 'prop-types';
import { TreeContext } from '../context';
import {
  EXPAND_ALL,
  COLLAPSE_ALL
} from '../constants';

const { useContext } = React;
const geAllIds = data => {
  let ids = [];

  data.forEach(({id, children}) => {
    const hasChildren = children && children.length;

    if(hasChildren) {
      ids = ids.concat(geAllIds(children));
    }
    ids.push(id)
  });

  return ids;
};

const ToggleAllButton = ({ data }) => {
  const allIds = geAllIds(data);
  const { expandedList, dispatch } = useContext(TreeContext);
  const expanded = expandedList.length === allIds.length;
  const clickHandler = () => expanded ? dispatch({type: COLLAPSE_ALL}) : dispatch({type: EXPAND_ALL, payload: allIds});

  return (
    <button onClick={clickHandler} >
      { expanded ? 'COLLAPSE ALL' : 'EXPAND ALL'}
    </button>
  );
}
ToggleAllButton.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default ToggleAllButton;