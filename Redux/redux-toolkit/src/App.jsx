import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  // this is the we can access the state without using useState
  // we need use useSelector from counterSlice to fetch the state

  const count = useSelector((state) => state.counter.value);

  // suppose we need to use increment fn  we called it action in redux terms we need to use dispatch fn in order to execute
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleReset() {
    dispatch(reset());
  }

  function handleIncbyAmount() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className="contianer">
      <button onClick={handleIncrement}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}>-</button>
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        placeholder="Enter a Number"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleIncbyAmount}>Incement by amount</button>
    </div>
  );
}
export default App;
