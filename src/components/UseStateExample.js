import React from 'react';
import { UseStateExampleContext } from '../context';
import { reducer } from '../reducer/useStateReducer';
import Checkbox from './Checkbox';

const { useReducer } = React;

const UseStateExample = () => {
  const [state, dispatch] = useReducer(reducer, null);

  return (
    <div>
      <UseStateExampleContext.Provider value={{
        state,
        dispatch
      }}>
        <div>CUSTOM USE STATE EXAMPLE</div>
        <div>
          <Checkbox />
        </div>
      </UseStateExampleContext.Provider>
    </div>
  );
};

export default UseStateExample;