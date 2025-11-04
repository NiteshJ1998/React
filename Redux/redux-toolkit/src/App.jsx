import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./features/counter/counterSlice";

function App() {
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

  return (
    <div className="contianer">
      <button onClick={handleIncrement}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
export default App;
