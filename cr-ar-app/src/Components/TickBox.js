import React, { useState } from 'react';
import "../Styles/Tickbox.css";
import "../Styles/main.css";

const TickBox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      Checkbox Label
    </label>
  );
};

export default TickBox;
