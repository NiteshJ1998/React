import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  // Variation - 1
  // runs on every render

  // useEffect(() => {
  //   alert("this will render on each render");
  // });

  // Variation - 2
  // that runs on only first render

  // useEffect(() => {
  //   alert("this will render only first time");
  // }, []);

  // Variation - 3
  //this will render whernver the count value updates
  // useEffect(() => {
  //   alert("i will render whenever the count value updates ");
  // }, [count]);

  // Variation - 4
  // Multiple Dependencies

  // useEffect(() => {
  //   alert("this will render wehen the count or total value get changed");
  // }, [count, total]);

  //Variation - 5
  // this time using clean up function in useEffect
  useEffect(() => {
    alert("this will render when count is updates");

    return () => {
      alert("clean up function runs");
    };
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }

  function handleClickTotal() {
    setTotal(count + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <br />
      <p>Count : {count}</p>

      <button onClick={handleClickTotal}>Click Me</button>
      <br />
      <p>Total : {total}</p>
    </div>
  );
}

export default App;
