import React, { useState } from "react";

function Input() {
  const [value, setValue] = useState("Hello React");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <div>
      <div>value: {value}</div>
      <input type="text" onChange={onChange} value={value} />
    </div>
  );
}

export default Input;
