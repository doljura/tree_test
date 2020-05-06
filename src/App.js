import React from 'react';
import Tree from './components/Tree';
import UseStateExample from './components/UseStateExample';
import './App.css';

const treeData = [
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
        "children": [
          {
            "name": "Name211",
            "id": "211"
          },
          {
            "name": "Name212",
            "id": "212"
          },
          {
            "name": "Name213",
            "id": "213",
            "children": [
              {
                "name": "Name2131",
                "id": "2131"
              },
            ]
          }
        ]
      },
      {
        "name": "Name22",
        "id": "22",
      }
    ]
  }
];

const App = () => (
  <div className="App">
    <Tree data={treeData} />
    <UseStateExample />
  </div>
);

export default App;
