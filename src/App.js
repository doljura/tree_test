import React from 'react';
import Tree from './components/Tree';
import { TreeContext } from './context';
import { reducer } from './reducer';
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

const App = () => {
  const [expandedList, dispatch] = useReducer(reducer, []);

  return (
    <div className="App">
      <TreeContext.Provider value={{
        expandedList,
        dispatch
      }}>
        <Tree data={testData} />
        <div>
          <ToggleAllButton data={testData} />
        </div>
      </TreeContext.Provider>
    </div>
  );
}

export default App;
