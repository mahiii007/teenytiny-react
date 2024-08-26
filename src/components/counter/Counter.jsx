import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [value, setValue] = useState(0);
  const [input, setInput] = useState(1);

  const handleIncrenment = () => {
    setValue(value + input);
  };

  const handleDecrement = () => {
    setValue(value - input);
  };

  const onInputChange = (e) => {
    setInput(parseInt(e.target.value));
  };
  return (
    <div>
      <input
        type="number"
        name="numberinput"
        id="numberinput"
        onChange={onInputChange}
      />
      <button onClick={handleIncrenment}>+</button>
      <div>{value}</div>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
