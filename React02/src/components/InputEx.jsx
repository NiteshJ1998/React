import { useState } from "react";

function InputEx() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="Type Something" onChange={handleChange} />
      <p>Type something : {text}</p>
    </div>
  );
}

export default InputEx;
