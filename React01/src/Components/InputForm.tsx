import { useState } from "react";

function InputForm() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [type, setType] = useState(false);

  const handleChange = (event: any) => {
    const newText = event.target.value;
    setName(newText);
    setCount(newText.length);

    // if (newText.length % 2 === 1) {
    //   setType(true);
    // } else {
    //   setType(false);
    // }

    setType((prevType) => !prevType);
    // setType((prevType) => !prevType);
  };

  return (
    <div>
      <h2>Enter anything</h2>
      <input onChange={handleChange} type="text" placeholder="name" />
      <h2>input value printed here: {name}</h2>
      <h2>string value : {count}</h2>
      <h2> boolan value: {type.toString()} </h2>
    </div>
  );
}

export default InputForm;



