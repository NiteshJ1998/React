import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increaseHandleClick() {
    setCount(count + 1);
  }
  function decreaseHandleClick() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={increaseHandleClick}>Increase</button>
      <h2>Count: {count}</h2>
      <button onClick={decreaseHandleClick}>Decrease</button>
    </div>
  );
}

export default Counter;
