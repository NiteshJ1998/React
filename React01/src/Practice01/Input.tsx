import React, { useState } from "react";

const Input = () => {
  const [name, setName] = useState("");
  const [hide, setHide] = useState(false);
  const [disable, setDisable] = useState(false);

  function clearButton() {
    setName("");
    setHide(false);
    setDisable(false);
  }

  function submitData() {
    setHide(true);
    setDisable(true);
  }
  return (
    <div>
      <h2>User Details</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        disabled={disable}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={submitData}>submit</button>
      <button onClick={clearButton}>ClearButton</button>
      User Details : {hide ? <div>{name}</div> : null}
    </div>
    // submit karne pe input box disable aur button disable hona chahiye
    // clearbutton pe input box and submit button enable hona chahiye
  );
};

export default Input;
