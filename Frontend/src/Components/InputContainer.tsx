import { useState, type SetStateAction } from "react";

function InputContainer() {
  const [value, setValue] = useState("");

  function getValue(e: { target: { value: SetStateAction<string> } }) {
    setValue(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={getValue} />

      <h2>{value}</h2>
    </div>
  );
}

export default InputContainer;
