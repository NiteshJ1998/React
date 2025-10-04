import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  function increase() {
    // debugger;
    // agar count ka value 10 hai toh woh count variable 0 koh 0 set karna chahiye
    if (count == 10) {
      debugger;
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  function decrease() {
    {
      count === 0 ? setCount(10) : setCount(count - 1);
    }
    // if (count == 0) {
    //   setCount(10);
    // } else {
    //   setCount(count - 1);
    // }
  }

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </div>
  );
};

export default Counter;
