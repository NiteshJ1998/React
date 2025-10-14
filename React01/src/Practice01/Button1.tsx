import React, { useEffect, useLayoutEffect, useState } from "react";

function Button1() {
  //   const [count, setCount] = useState(0);
  //   const [name, setName] = useState("sidd");
  let name = "sid";

  console.log(name);

  const getName = () => {
    // setName("Nitesh");
    name = "nitesh";
    console.log("function");
    // setCount(1);
  };

  useEffect(() => {
    console.log("Empty UseEffect");
  }, []);

  //   useEffect(() => {
  //     console.log("useEffect dependency");
  //   }, [name]);l

  return (
    <div>
      {console.log("xyz")}
      <button onClick={getName}>GetName</button>

      <p>Name: {name}</p>
    </div>
  );
}

export default Button1;
