import React from 'react';
import Tree from './components/Tree';
import { TreeContext } from './context';
import { reducer } from './reducer';
import {
  EXPAND_ALL,
  COLLAPSE_ALL
} from './constants';
import ToggleAllButton from './components/ToggleAllButton';
import './App.css';

const { useReducer } = React;
const testData = [
  {
    "name": "Name1",
    "id": "1",
    "children": [
      {
        "name": "Name11",
        "id": "11",
      },
      {
        "name": "Name12",
        "id": "12",
        "children": [
          {
            "name": "Name121",
            "id": "121"
          }
        ]
      }
    ]
  },
  {
    "name": "Name2",
    "id": "2",
    "children": [
      {
        "name": "Name21",
        "id": "21",
      },
      {
        "name": "Name22",
        "id": "22",
      }
    ]
  }
];

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

const App = () => {
  const [expandedList, dispatch] = useReducer(reducer, []);
  const allIds = geAllIds(testData);
  const expanded = expandedList.length === allIds.length;
  const clickHandler = () => expanded ? dispatch({type: COLLAPSE_ALL}) : dispatch({type: EXPAND_ALL, payload: allIds});
  return (
    <div className="App">
      <TreeContext.Provider value={{
        expandedList,
        dispatch
      }}>
        <Tree data={testData} />
      </TreeContext.Provider>
      <div>
        <ToggleAllButton clickHandler={clickHandler} expanded={expanded} />
      </div>
    </div>
  );
}

export default App;
