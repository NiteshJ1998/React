import { useState } from "react";

function Button() {
  const [name1, setName1] = useState("sidd");
  let name = "sidd" as string | null;
  const setStorage = () => {
    console.log("hello");
    sessionStorage.setItem("name", "nitesh");
    localStorage.setItem("name1", "nitesh");
  };

  const getStorage = () => {


    console.log(name);
    // debugger;
    const updatedName = localStorage.getItem("name");

    name = updatedName;
    console.log(name);

    setName1()
  };

  return (
    <div>
      <button onClick={setStorage}>SetStorage</button>
      <button onClick={getStorage}>GetStorage</button>
      <div>name1: {name1}</div>
      {/* <h2>Count: {localStorage} </h2>
      <button onClick={handleClick}>Increase</button> */}
    </div>
  );
}

export default Button;
