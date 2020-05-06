import React from 'react';
import { useState } from '../hooks';
const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked(!checked);

  return (
    <input onChange={onChange} type="checkbox" checked={checked} />
  );
};

export default Checkbox;