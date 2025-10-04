import { useState } from "react";

function InputForm() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [type, setType] = useState(false);
  //   const [count, setCount] = useState(0);

  //   function countfun() {
  //     setCount(count + 1);
  //   }

  //   function backcount(){
  //     setCount(count - 1)
  //   }

  const handleChange = (event: any) => {
    const newText = event.target.value;
    setName(newText);

    if (newText.length % 2 === 1) {
      setType(true);
    } else {
      setType(false);
    }
  };

  const countHandleChange = (event: any) => {
    const countText = event.target.value.length;
    setCount(countText);
  };

  return (
    <div>
      <h2>Enter anything</h2>
      <input
        onChange={handleChange}
        // onChange={(event) => {
        //   setName(event.target.value);
        //   setCount(event.target.value.length);
        //   setType(true);
        // }}

        type="text"
        placeholder="name"
      />
      <h2>input value printed here: {name}</h2>
      <h2>string value : {count}</h2>
      <h2> boolan value: {type.toString()} </h2>
    </div>
  );
}

export default InputForm;
