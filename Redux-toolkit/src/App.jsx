import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncreament() {
    dispatch(increment());
  }
  function handleDecreament() {
    dispatch(decrement());
  }
  return (
    <div>
      <button onClick={handleIncreament}> +</button>
      <h2>Count: {count}</h2>
      <button onClick={handleDecreament}> -</button>
    </div>
  );
}

export default App;

//Steps
// Create Store
// wrap components under providers
// create slice
// register reducer in slice
